import React from 'react';
import { Hammer, Printer, Send, Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Section */}
      <header className="relative py-20 px-6 text-center border-b border-orange-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-4">
          Tuft<span className="text-orange-500">Forge</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-xl mx-auto italic">
          Industrial precision. Handmade soul. Madison, Indiana.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        {/* Services */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate-800 bg-slate-900/50 rounded-2xl hover:border-orange-500/50 transition-colors">
            <Hammer className="text-orange-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-2 uppercase italic">Custom Tufted Rugs</h2>
            <p className="text-slate-400">Hand-crafted floor art built to your specs. Any shape, any design.</p>
          </div>
          <div className="p-8 border border-slate-800 bg-slate-900/50 rounded-2xl hover:border-orange-500/50 transition-colors">
            <Printer className="text-orange-500 mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-2 uppercase italic">3D Printed Innovation</h2>
            <p className="text-slate-400">From functional tools to custom lures. Precision manufacturing at home.</p>
          </div>
        </section>

        {/* Gallery Placeholder */}
        <section>
          <h3 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-orange-500 pl-4">The Forge Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {/* When you add photos, you'll put them here */}
             <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center border border-dashed border-slate-700 text-slate-600 italic">
               Project Photo 1 Coming Soon
             </div>
             <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center border border-dashed border-slate-700 text-slate-600 italic">
               Project Photo 2 Coming Soon
             </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm uppercase tracking-widest">
        &copy; 2026 TuftForge Studio
      </footer>
    </div>
  );
}

