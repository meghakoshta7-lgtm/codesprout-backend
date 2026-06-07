import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Star, Download, CheckCircle2, X, Loader2, BookOpen, TrendingUp, Users, Crown } from 'lucide-react';
import SEO from '@/shared/components/SEO';
import api from '@/services/api';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const itemAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CATEGORIES = [
  { id: 'all' as const, label: 'All', icon: '📚' },
  { id: 'pdf' as const, label: 'PDFs', icon: '📄' },
  { id: 'notes' as const, label: 'Notes', icon: '📝' },
  { id: 'interview-notes' as const, label: 'Interview Notes', icon: '🎤' },
  { id: 'company-specific' as const, label: 'Company Specific', icon: '🏢' },
];

interface ShopProduct {
  id: string; title: string; description: string; category: string;
  price: { amount: number; label: string } | 'free';
  icon: string; color: string; tags: string[];
  popular?: boolean; pages?: number; author?: string;
}

function formatPrice(p: ShopProduct['price']) {
  if (p === 'free') return { text: 'Free', isFree: true, amount: 0 };
  return { text: p.label, isFree: false, amount: p.amount };
}

export default function ShopPage() {
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [cart, setCart] = useState<ShopProduct[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('/shop/products')
      .then(res => setProducts(res.data?.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    if (showFreeOnly) list = list.filter(p => p.price === 'free' || (typeof p.price === 'object' && p.price.amount === 0));
    return list;
  }, [products, activeCategory, search, showFreeOnly]);

  const cartTotal = cart.reduce((s, p) => {
    if (p.price === 'free') return s;
    return s + p.price.amount;
  }, 0);
  const hasPaidItems = cart.some(p => p.price !== 'free' && p.price.amount > 0);

  const toggleCart = (p: ShopProduct) => {
    setCart(prev => prev.find(x => x.id === p.id) ? prev.filter(x => x.id !== p.id) : [...prev, p]);
  };

  const inCart = (id: string) => cart.some(x => x.id === id);

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setCheckoutLoading(false);
    setCheckoutDone(true);
    setCart([]);
    setTimeout(() => setCheckoutDone(false), 3000);
  };

  return (
    <>
      <SEO title="Shop - CodeSprout" description="Premium interview preparation resources - PDFs, notes, company-specific guides" />
      <div className="min-h-screen pt-20 sm:pt-24 pb-16 bg-slate-950">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Shop</h1>
              </div>
              <p className="text-slate-400 text-sm">Premium resources to ace your interviews</p>
            </div>
            <button onClick={() => setShowCart(true)} className="relative p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
              <ShoppingCart className="w-5 h-5 text-slate-300" />
              {cart.length > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center">{cart.length}</span>}
            </button>
          </div>

          {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { icon: BookOpen, label: 'Resources', value: products.length, color: 'text-primary-400' },
              { icon: Crown, label: 'Free Items', value: products.filter(p => p.price === 'free' || (typeof p.price === 'object' && p.price.amount === 0)).length, color: 'text-emerald-400' },
              { icon: TrendingUp, label: 'Premium', value: products.filter(p => p.price !== 'free' && (typeof p.price === 'object' && p.price.amount > 0)).length, color: 'text-amber-400' },
              { icon: Users, label: 'Categories', value: CATEGORIES.length, color: 'text-pink-400' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3">
                <s.icon className={`w-6 h-6 ${s.color}`} />
                <div><div className="text-xl font-bold text-white">{s.value}</div><div className="text-xs text-slate-500">{s.label}</div></div>
              </div>
            ))}
          </div>
          )}

          {/* Search + Filters */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search resources..." className="w-full pl-9 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary-500" />
              </div>
              <label className="flex items-center gap-2 px-3 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl cursor-pointer hover:border-slate-600 transition">
                <input type="checkbox" checked={showFreeOnly} onChange={e => setShowFreeOnly(e.target.checked)} className="w-4 h-4 rounded accent-primary-500" />
                <span className="text-sm text-slate-300 whitespace-nowrap">Free only</span>
              </label>
            </div>
            {/* Category tabs */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-thin">
              {CATEGORIES.map(c => (
                <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${activeCategory === c.id ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
                  <span>{c.icon}</span> {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20"><Loader2 className="w-8 h-8 text-primary-500 animate-spin" /></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">No resources found matching your criteria</p>
            </div>
          ) : (
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(p => {
              const price = formatPrice(p.price);
              return (
                <motion.div key={p.id} variants={itemAnim} className="group bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-primary-500/5">
                  <div className={`h-1.5 bg-gradient-to-r ${p.color}`} />
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-lg`}>{p.icon}</div>
                      <div className="flex items-center gap-1.5">
                        {p.popular && <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[10px] font-bold flex items-center gap-0.5"><Star className="w-2.5 h-2.5" /> Popular</span>}
                        {price.isFree ? <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold">Free</span> : <span className="px-2 py-0.5 rounded-full bg-primary-500/15 text-primary-400 text-[10px] font-bold">{price.text}</span>}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{p.title}</h3>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-2 leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {p.tags.slice(0, 3).map(t => <span key={t} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px]">{t}</span>)}
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-3">
                      {p.pages && <span>{p.pages} pages</span>}
                      {p.author && <span className="truncate ml-1">by {p.author}</span>}
                    </div>
                    <button onClick={() => toggleCart(p)} className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${inCart(p.id) ? 'bg-slate-700 text-slate-300' : price.isFree ? 'bg-emerald-500 hover:bg-emerald-400 text-white' : 'bg-primary-500 hover:bg-primary-400 text-white'}`}>
                      {inCart(p.id) ? <><X className="w-3.5 h-3.5" /> Remove</> : price.isFree ? <><Download className="w-3.5 h-3.5" /> Free Download</> : <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          )}
        </div>

        {/* Cart drawer */}
        {showCart && (
          <div className="fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCart(false)} />
            <div className="ml-auto w-full max-w-md bg-slate-950 border-l border-slate-800 h-full flex flex-col relative z-10">
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <h2 className="text-lg font-bold text-white flex items-center gap-2"><ShoppingCart className="w-5 h-5 text-primary-400" /> Cart ({cart.length})</h2>
                <button onClick={() => setShowCart(false)} className="p-1.5 rounded-lg hover:bg-slate-800 transition"><X className="w-5 h-5 text-slate-400" /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 ? (
                  <div className="text-center py-12"><ShoppingCart className="w-12 h-12 text-slate-700 mx-auto mb-3" /><p className="text-slate-500 text-sm">Your cart is empty</p></div>
                ) : (
                  cart.map(p => {
                    const price = formatPrice(p.price);
                    return (
                      <div key={p.id} className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center text-base flex-shrink-0`}>{p.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-white truncate">{p.title}</div>
                          <div className="text-xs text-slate-500 capitalize">{p.category.replace('-', ' ')}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className={`text-sm font-bold ${price.isFree ? 'text-emerald-400' : 'text-primary-400'}`}>{price.text}</div>
                          <button onClick={() => toggleCart(p)} className="text-xs text-red-400 hover:text-red-300">Remove</button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-4 border-t border-slate-800 space-y-3">
                  {hasPaidItems && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Total</span>
                      <span className="text-xl font-bold text-white">₹{cartTotal.toLocaleString()}</span>
                    </div>
                  )}
                  <button onClick={handleCheckout} disabled={checkoutLoading}
                    className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-400 hover:to-pink-400 text-white transition disabled:opacity-50 flex items-center justify-center gap-2">
                    {checkoutLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : checkoutDone ? <><CheckCircle2 className="w-4 h-4" /> Purchased!</> : hasPaidItems ? `Proceed to Checkout ₹${cartTotal.toLocaleString()}` : 'Download All Free'}
                  </button>
                  {checkoutDone && <p className="text-xs text-emerald-400 text-center">Resources will be available in your dashboard</p>}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
