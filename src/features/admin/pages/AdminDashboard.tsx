import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Star, CreditCard, Mail, Send, RefreshCw, Bell } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import { useAdminStats } from '../hooks/useAdmin';
import { adminApi } from '../api/adminApi';
import toast from 'react-hot-toast';

export default function AdminDashboard() {
  const { stats, loading } = useAdminStats();
  const [emailEnabled, setEmailEnabled] = useState<boolean | null>(null);
  const [sending, setSending] = useState<string | null>(null);

  useEffect(() => {
    adminApi.emailStatus().then(r => setEmailEnabled(r.data.enabled)).catch(() => setEmailEnabled(false));
  }, []);

  const sendTest = async (type: string) => {
    setSending(type);
    try {
      const r = await adminApi.testEmail(type);
      toast.success(r.data.message || 'Email sent!');
    } catch (e: any) {
      toast.error(e?.response?.data?.error || 'Failed to send');
    } finally {
      setSending(null);
    }
  };

  const checkExpiring = async () => {
    setSending('expiring');
    try {
      const r = await adminApi.checkExpiring();
      toast.success(`Sent ${r.data.count} expiring email${r.data.count === 1 ? '' : 's'}`);
    } catch (e: any) {
      toast.error(e?.response?.data?.error || 'Failed');
    } finally {
      setSending(null);
    }
  };

  const cards = stats ? [
    { icon: Users, label: 'Total Users', value: stats.total_users, color: 'blue' },
    { icon: BookOpen, label: 'Questions', value: stats.total_questions, color: 'green' },
    { icon: Star, label: 'Bookmarks', value: stats.total_bookmarks, color: 'yellow' },
    { icon: CreditCard, label: 'Premium Users', value: stats.premium_users, color: 'purple' },
  ] : [];

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Overview</h1>
          <p className="text-gray-500 mb-8">Platform statistics at a glance</p>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="card p-6 animate-pulse"><div className="h-8 bg-gray-200 rounded w-16 mb-2" /><div className="h-4 bg-gray-200 rounded w-24" /></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cards.map((card) => (
                <div key={card.label} className="card p-6">
                  <card.icon className={`w-8 h-8 text-${card.color}-500 mb-3`} />
                  <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Email Tools */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-gray-900">Email Tools</h2>
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-medium ${emailEnabled ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {emailEnabled === null ? '...' : emailEnabled ? '● Active (Gmail)' : '○ Not configured'}
              </span>
            </div>

            <div className="card p-6">
              <p className="text-sm text-gray-600 mb-4">
                Send yourself a test email to verify SMTP is working. Set <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">GMAIL_USER</code> &amp; <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">GMAIL_APP_PASSWORD</code> on Render if not active.
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => sendTest('welcome')} disabled={!emailEnabled || !!sending} className="btn-secondary text-sm flex items-center gap-1.5 disabled:opacity-50">
                  <Send className="w-3.5 h-3.5" /> {sending === 'welcome' ? 'Sending...' : 'Test Welcome'}
                </button>
                <button onClick={() => sendTest('subscription')} disabled={!emailEnabled || !!sending} className="btn-secondary text-sm flex items-center gap-1.5 disabled:opacity-50">
                  <Send className="w-3.5 h-3.5" /> {sending === 'subscription' ? 'Sending...' : 'Test Subscription'}
                </button>
                <button onClick={() => sendTest('expiring')} disabled={!emailEnabled || !!sending} className="btn-secondary text-sm flex items-center gap-1.5 disabled:opacity-50">
                  <Send className="w-3.5 h-3.5" /> {sending === 'expiring' ? 'Sending...' : 'Test Expiring'}
                </button>
                <button onClick={() => sendTest('streak')} disabled={!emailEnabled || !!sending} className="btn-secondary text-sm flex items-center gap-1.5 disabled:opacity-50">
                  <Send className="w-3.5 h-3.5" /> {sending === 'streak' ? 'Sending...' : 'Test Streak'}
                </button>
                <button onClick={checkExpiring} disabled={!emailEnabled || !!sending} className="btn-primary text-sm flex items-center gap-1.5 disabled:opacity-50">
                  <RefreshCw className={`w-3.5 h-3.5 ${sending === 'expiring' ? 'animate-spin' : ''}`} /> Run "Expiring Soon" sweep
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
