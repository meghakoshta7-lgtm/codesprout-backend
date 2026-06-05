import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, adminOnly = false }: { children: React.ReactNode; adminOnly?: boolean }) {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = (() => {
    try { return JSON.parse(localStorage.getItem('user') || 'null'); }
    catch { return null; }
  })();

  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
