import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, Map, BarChart3, Bell } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Overview', href: '#overview' },
    { name: 'Sensors', href: '#sensors' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Alerts', href: '#alerts' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <Leaf className="h-6 w-6 text-green-600" />
          <span>SmartWaste</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-gray-900 transition-colors">
              {l.name}
            </a>
          ))}
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors"
          >
            <Map className="h-4 w-4" />
            Get Started
          </a>
        </div>
        <button
          className="md:hidden rounded-md p-2 hover:bg-black/5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/5"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-gray-900"
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors"
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
