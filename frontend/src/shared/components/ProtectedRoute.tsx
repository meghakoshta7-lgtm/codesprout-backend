import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userStorage } from '@/shared/utils/userStorage';

export default function ProtectedRoute({ children, adminOnly = false }: { children: React.ReactNode; adminOnly?: boolean }) {
  const location = useLocation();
  const [state, setState] = useState<'loading' | 'done' | 'redirect'>(() => {
    const token = localStorage.getItem('token');
    if (!token) return 'redirect';
    return 'loading';
  });
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (state !== 'loading') return;
    let cancelled = false;
    userStorage.get<any>().then((u) => {
      if (cancelled) return;
      if (!u) setState('redirect');
      else { setUser(u); setState('done'); }
    });
    return () => { cancelled = true; };
  }, [state]);

  if (state === 'redirect') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (state === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1020' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-white/40 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
