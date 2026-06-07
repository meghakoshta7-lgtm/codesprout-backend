import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, User, Send, Loader2, Mic, MicOff, Volume2, VolumeX, ArrowLeft, CheckCircle2, XCircle, AlertCircle, PhoneOff, Sparkles, ChevronDown, ChevronUp, Clock, Trophy } from 'lucide-react';
import { interviewApi } from '../api/interviewApi';
import SEO from '@/shared/components/SEO';
import { useUser } from '@/shared/hooks/useUser';

type Phase = 'setup' | 'intro' | 'conversation' | 'report';

interface Message {
  role: 'ai' | 'user';
  text: string;
}

const ROUND_ICONS: Record<string, string> = {
  greeting: '👋', technical: '💻', coding: '⌨️', behavioral: '🤝', hr: '📋', counter: '❓', closing: '🎯',
};

const ROUND_LABELS: Record<string, string> = {
  greeting: 'Introduction', technical: 'Technical', coding: 'Coding',
  behavioral: 'Behavioral', hr: 'HR', counter: 'Your Questions', closing: 'Wrap-up',
};

const ROUND_COLORS: Record<string, string> = {
  greeting: 'from-emerald-500 to-teal-500', technical: 'from-blue-500 to-indigo-500',
  coding: 'from-purple-500 to-pink-500', behavioral: 'from-amber-500 to-orange-500',
  hr: 'from-rose-500 to-red-500', counter: 'from-cyan-500 to-blue-500', closing: 'from-green-500 to-emerald-500',
};

export default function AiInterviewPage() {
  const navigate = useNavigate();
  const user = useUser();

  const [phase, setPhase] = useState<Phase>('setup');
  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [totalRounds] = useState(6);
  const [currentRound, setCurrentRound] = useState('greeting');
  const [difficulty, setDifficulty] = useState('easy');
  const [interviewComplete, setInterviewComplete] = useState(false);
  const [completedRounds, setCompletedRounds] = useState<{ type: string; score?: number }[]>([]);
  const [report, setReport] = useState<any>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [sttSupported, setSttSupported] = useState(false);
  const [sttError, setSttError] = useState('');
  const [error, setError] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setSttSupported(!!SR);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);

  const speak = (text: string) => {
    if (!ttsEnabled || !('speechSynthesis' in window)) return;
    try { window.speechSynthesis.cancel(); } catch {}
    const utter = new SpeechSynthesisUtterance(text.replace(/[*_#\[\]]/g, ''));
    utter.rate = 0.95; utter.pitch = 1; utter.volume = 1;
    try { window.speechSynthesis.speak(utter); } catch {}
  };

  const startListening = () => {
    setSttError('');
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { setSttError('Speech not supported'); return; }
    try { recognitionRef.current?.abort(); } catch {}
    const rec = new SR();
    rec.continuous = true; rec.interimResults = true; rec.lang = 'en-US';
    rec.onresult = (e: any) => {
      let finalText = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript;
      }
      if (finalText) setInput(prev => (prev ? prev + ' ' : '') + finalText.trim());
    };
    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);
    try { rec.start(); recognitionRef.current = rec; setIsListening(true); } catch {}
  };

  const stopListening = () => { try { recognitionRef.current?.stop(); } catch {} setIsListening(false); };

  const startInterview = async () => {
    setLoading(true); setError('');
    try {
      const res = await interviewApi.startAiInterview();
      const { sessionId: sid, reply } = res.data;
      setSessionId(sid);
      setMessages([{ role: 'ai', text: reply }]);
      setPhase('conversation');
      setTimeout(() => speak(reply), 500);
    } catch (e: any) {
      setError(e?.response?.data?.error || 'Failed to start interview');
    } finally { setLoading(false); }
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading || !sessionId) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true); setTyping(true);
    try {
      const res = await interviewApi.sendAiMessage(sessionId, text);
      const d = res.data;
      setMessages(prev => [...prev, { role: 'ai', text: d.reply }]);
      setCurrentRound(d.round);
      setRoundNumber(d.roundNumber);
      setDifficulty(d.difficulty);
      setInterviewComplete(d.interviewComplete);
      if (d.completedRounds?.length > 0) setCompletedRounds(d.completedRounds);
      setTimeout(() => speak(d.reply), 500);
    } catch (e: any) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Sorry, I had trouble processing that. Could you repeat?' }]);
    } finally { setLoading(false); setTyping(false); }
  };

  const endInterview = async () => {
    if (!confirm('End this interview? You will get your feedback report.')) return;
    if (sessionId) await interviewApi.endAiInterview(sessionId).catch(() => {});
    setPhase('report');
    setReportLoading(true);
    try {
      const res = await interviewApi.getAiInterviewReport(sessionId);
      setReport(res.data.report);
    } catch { setReport({ overall: 0, breakdown: [], strengths: [], weaknesses: [], missing_points: [], recommendations: ['Report generation failed.'] }); }
    finally { setReportLoading(false); }
  };

  // ====== SETUP ======
  if (phase === 'setup') {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-slate-950">
        <SEO title="AI Mock Interview - CodeSprout" path="/interview-prep/ai" noindex />
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link to="/interview-prep/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-6">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Bot className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI Mock Interview
            </h1>
            <p className="text-slate-400 mt-2 max-w-lg mx-auto">
              A complete interview experience — introduction, technical, behavioral, HR rounds with adaptive difficulty and detailed feedback.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {['Introduction', 'Technical', 'Behavioral', 'HR', 'Your Questions', 'Feedback'].map((label, i) => (
                <div key={label} className="bg-slate-800/40 rounded-lg p-2 text-center">
                  <div className="text-xs text-slate-500">Round {i + 1}</div>
                  <div className="text-sm font-semibold text-slate-200">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => setTtsEnabled(t => !t)} className={`p-2 rounded-lg transition ${ttsEnabled ? 'bg-primary-500/20 text-primary-400' : 'bg-slate-800 text-slate-400'}`}>
                {ttsEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
              <span className="text-xs text-slate-500">AI Voice</span>
            </div>

            {error && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-400">{error}</div>}

            <button onClick={startInterview} disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-base bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-400 hover:to-pink-400 text-white transition disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Starting...</> : <><Sparkles className="w-5 h-5" /> Start Mock Interview</>}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ====== REPORT ======
  if (phase === 'report') {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 bg-slate-950">
        <SEO title="Interview Report - CodeSprout" noindex />
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link to="/interview-prep/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-6">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
          {reportLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
            </div>
          ) : report ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-extrabold text-white">Interview Complete</h1>
                <p className="text-slate-400 mt-1">Here is your detailed feedback report</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
                <div className="text-5xl font-extrabold bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent">{report.overall || 0}</div>
                <div className="text-slate-400 text-sm mt-1">Overall Score / 100</div>
              </div>

              {report.breakdown?.length > 0 && (
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <h2 className="text-lg font-bold text-white">Score Breakdown</h2>
                  {report.breakdown.map((b: any) => (
                    <div key={b.name}>
                      <div className="flex justify-between text-sm mb-1"><span className="text-slate-300">{b.name}</span><span className="text-white font-semibold">{b.score}%</span></div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-pink-500 transition-all" style={{ width: `${b.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {report.rounds?.map((r: any) => (
                <div key={r.type} className="flex items-center justify-between bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{ROUND_ICONS[r.type] || '📝'}</span>
                    <div><div className="text-sm font-semibold text-white">{ROUND_LABELS[r.type] || r.type}</div><div className="text-xs text-slate-500">{r.questions_asked} questions</div></div>
                  </div>
                  <div className={`text-lg font-bold ${r.score ? 'text-primary-400' : 'text-slate-500'}`}>{r.score ?? '-'}</div>
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {report.strengths?.length > 0 && (
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Strengths</h3>
                    {report.strengths.map((s: string) => <p key={s} className="text-sm text-slate-300 mb-1">✓ {s}</p>)}
                  </div>
                )}
                {report.weaknesses?.length > 0 && (
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-1.5"><AlertCircle className="w-4 h-4" /> Areas to Improve</h3>
                    {report.weaknesses.map((w: string) => <p key={w} className="text-sm text-slate-300 mb-1">✘ {w}</p>)}
                  </div>
                )}
              </div>

              {report.recommendations?.length > 0 && (
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                  <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary-400" /> Recommended Practice</h2>
                  {report.recommendations.map((r: string) => <p key={r} className="text-sm text-slate-300 mb-1.5">• {r}</p>)}
                </div>
              )}

              {report.missing_points?.length > 0 && (
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-amber-400 mb-2">Key Points to Cover</h3>
                  {report.missing_points.map((p: string) => <p key={p} className="text-sm text-slate-300 mb-1">• {p}</p>)}
                </div>
              )}

              <Link to="/interview-prep/dashboard" className="block w-full py-3 rounded-xl font-bold text-center bg-gradient-to-r from-primary-500 to-pink-500 text-white hover:from-primary-400 hover:to-pink-400 transition">
                Back to Dashboard
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // ====== CONVERSATION ======
  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-24 bg-slate-950 flex flex-col">
      <SEO title="AI Interview - CodeSprout" noindex />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/interview-prep/dashboard')} className="p-1.5 rounded-lg hover:bg-slate-800 transition"><ArrowLeft className="w-5 h-5 text-slate-400" /></button>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${ROUND_COLORS[currentRound] || 'from-primary-500 to-pink-500'} flex items-center justify-center`}>
                <span className="text-sm">{ROUND_ICONS[currentRound] || '💬'}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">{ROUND_LABELS[currentRound] || currentRound}</div>
                <div className="text-xs text-slate-500">Round {roundNumber}/{totalRounds} · {difficulty}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setTtsEnabled(t => !t)} className={`p-2 rounded-lg transition ${ttsEnabled ? 'bg-primary-500/20 text-primary-400' : 'bg-slate-800 text-slate-400'}`}>
              {ttsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button onClick={endInterview} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition">
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Round progress */}
        <div className="max-w-3xl mx-auto px-4 pb-2">
          <div className="flex gap-1">
            {[...Array(totalRounds)].map((_, i) => {
              const cr = completedRounds.find(r => r.type === ['greeting','technical','behavioral','hr','counter','closing'][i]);
              const isCurrent = i === roundNumber - 1;
              const done = i < roundNumber - 1 || cr;
              return (
                <div key={i} className={`flex-1 h-1.5 rounded-full transition ${done ? 'bg-primary-500' : isCurrent ? 'bg-primary-500/50' : 'bg-slate-800'}`} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-4 space-y-4 overflow-y-auto mt-20">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'ai' ? 'bg-gradient-to-br from-primary-500 to-pink-500' : 'bg-slate-700'}`}>
              {msg.role === 'ai' ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-slate-300" />}
            </div>
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai' ? 'bg-slate-800/80 text-slate-200 rounded-tl-sm' : 'bg-primary-500/20 text-white rounded-tr-sm border border-primary-500/20'}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-slate-800/60 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 py-3">
          {interviewComplete ? (
            <button onClick={endInterview} className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-primary-500 to-pink-500 text-white hover:from-primary-400 hover:to-pink-400 transition flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5" /> View My Report
            </button>
          ) : (
            <div className="flex gap-2">
              <button onClick={() => isListening ? stopListening() : startListening()} className={`p-3 rounded-xl transition flex-shrink-0 ${isListening ? 'bg-red-500/20 text-red-400 animate-pulse' : sttSupported ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-slate-800/50 text-slate-600 cursor-not-allowed'}`}>
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }} placeholder="Type your answer..." rows={1} className="flex-1 px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary-500 resize-none" />
              <button onClick={sendMessage} disabled={!input.trim() || loading} className="p-3 rounded-xl bg-primary-500 text-white hover:bg-primary-400 transition disabled:opacity-50 flex-shrink-0">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          )}
          {sttError && <p className="text-xs text-red-400 mt-1">{sttError}</p>}
        </div>
      </div>
    </div>
  );
}
