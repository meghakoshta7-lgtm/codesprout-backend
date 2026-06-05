import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { router } from '@/app/routes';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { background: '#1f2937', color: '#f9fafb', borderRadius: '12px' },
        }}
      />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}
