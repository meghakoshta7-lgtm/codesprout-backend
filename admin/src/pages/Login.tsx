import { useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('admin@dsacheatsheets.com')
  const [password, setPassword] = useState('admin123')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await adminApi.login(email, password)
      if (res.data.user?.role !== 'admin') {
        toast.error('Admin access required')
        return
      }
      localStorage.setItem('admin_token', res.data.token)
      toast.success('Welcome Admin!')
      navigate('/')
    } catch (err: any) {
      const status = err.response?.status
      const message = err.response?.data?.error || err.message
      
      if (status === 404) {
        toast.error(`Login endpoint not found (404). API may be down.`)
      } else if (status === 401) {
        toast.error('Invalid credentials')
      } else if (status >= 500) {
        toast.error(`Server error: ${message}`)
      } else if (!err.response) {
        toast.error(`Network error: Cannot reach backend at ${import.meta.env.VITE_API_URL || 'default URL'}`)
      } else {
        toast.error(message || 'Login failed')
      }
      console.error('[admin-login-error]', { status, message, url: import.meta.env.VITE_API_URL })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="card p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Admin Login</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to manage the platform</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? 'Signing in...' : 'Sign In'}</button>
        </div>
      </form>
    </div>
  )
}
