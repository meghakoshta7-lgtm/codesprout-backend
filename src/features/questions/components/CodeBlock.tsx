import { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

const LANGUAGES = ['javascript', 'python', 'java', 'cpp', 'c'] as const;
type Lang = (typeof LANGUAGES)[number];

const LANG_LABELS: Record<Lang, string> = {
  javascript: 'JavaScript',
  python: 'Python',
  java: 'Java',
  cpp: 'C++',
  c: 'C',
};

interface CodeBlockProps {
  code: Record<string, string>;
  defaultLang?: Lang;
}

export default function CodeBlock({ code, defaultLang = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<Lang>(
    LANGUAGES.find((l) => code[l]) ?? defaultLang
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(code[lang] || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const availableLangs = LANGUAGES.filter((l) => code[l]);

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-gray-800 rounded-t-lg">
        <div className="flex">
          {availableLangs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 text-xs font-medium transition-colors flex items-center gap-1.5 ${
                lang === l
                  ? 'text-white bg-gray-700 border-b-2 border-primary-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Code2 className="w-3 h-3" />
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
        <button onClick={handleCopy} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm font-mono leading-relaxed">
        <code>{code[lang] || '// Not available in this language'}</code>
      </pre>
    </div>
  );
}
