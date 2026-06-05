import { motion } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import { useAdminUsers } from '../hooks/useAdmin';
import { formatDate } from '@/shared/utils/helpers';

export default function ManageUsers() {
  const { users, loading } = useAdminUsers();

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-white mb-1">Users</h1>
          <p className="text-slate-400 mb-8">Manage registered users</p>

          {loading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="card p-4 animate-pulse"><div className="h-5 bg-gray-200 rounded w-48" /></div>
              ))}
            </div>
          ) : (
            <div className="bg-[#111827] rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1E293B] border-b border-white/10">
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Name</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Email</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Role</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Plan</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-white">{u.name}</td>
                      <td className="px-4 py-3 text-slate-400">{u.email}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${u.role === 'admin' ? 'bg-primary-500/10 text-primary-400' : 'bg-white/10 text-slate-400'}`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${u.subscription_plan === 'premium' ? 'bg-primary-500/10 text-primary-400' : 'bg-white/10 text-slate-400'}`}>
                          {u.subscription_plan}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{formatDate(u.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
