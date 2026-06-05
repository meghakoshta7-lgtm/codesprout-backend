import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Users, PlusCircle, BarChart3 } from 'lucide-react';
import { cn } from '@/shared/utils/helpers';

const links = [
  { to: '/admin', icon: LayoutDashboard, label: 'Overview', exact: true },
  { to: '/admin/topics', icon: PlusCircle, label: 'Manage Topics' },
  { to: '/admin/questions', icon: BookOpen, label: 'Manage Questions' },
  { to: '/admin/add-question', icon: PlusCircle, label: 'Add Question' },
  { to: '/admin/users', icon: Users, label: 'Users' },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-[#111827] border-r border-white/10 min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white">Admin Panel</h2>
        <p className="text-xs text-slate-400">Manage your content</p>
      </div>
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.exact}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
              isActive ? 'bg-primary-500/10 text-primary-400' : 'text-slate-400 hover:bg-white/5'
            )}
          >
            <link.icon className="w-5 h-5" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
