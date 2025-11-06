import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5o2f8WizO5czuI0o/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-32 lg:pb-24 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Smarter Waste, Cleaner Cities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-gray-700"
          >
            Real-time fill-level monitoring, route optimization, and actionable analytics to reduce costs and emissions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#get-started" className="rounded-full bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-colors">
              Start Monitoring
            </a>
            <a href="#analytics" className="rounded-full bg-black/5 text-gray-900 px-6 py-3 font-medium hover:bg-black/10 transition-colors">
              View Analytics
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
