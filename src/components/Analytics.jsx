import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingDown, TrendingUp, Clock } from 'lucide-react';

export default function Analytics({ bins = [] }) {
  const stats = useMemo(() => {
    if (!bins.length) return null;
    const avgFill = Math.round(bins.reduce((a, b) => a + b.fillLevel, 0) / bins.length);
    const highAlerts = bins.filter((b) => b.fillLevel >= 80).length;
    const avgBattery = Math.round(bins.reduce((a, b) => a + b.battery, 0) / bins.length);
    return { avgFill, highAlerts, avgBattery };
  }, [bins]);

  return (
    <section id="analytics" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-center gap-3">
        <BarChart3 className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-900">Optimization Insights</h2>
      </div>
      <p className="mt-1 text-gray-600">Reduce collection costs with data-driven planning.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-black/5 bg-white p-5">
          <div className="text-sm text-gray-600">Average Fill Level</div>
          <div className="mt-2 text-3xl font-bold">{stats ? `${stats.avgFill}%` : '—'}</div>
          <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-green-600" /> last 24h
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-black/5 bg-white p-5">
          <div className="text-sm text-gray-600">High Priority Alerts</div>
          <div className="mt-2 text-3xl font-bold">{stats ? stats.highAlerts : '—'}</div>
          <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
            <Clock className="h-4 w-4 text-yellow-600" /> live
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-black/5 bg-white p-5">
          <div className="text-sm text-gray-600">Average Battery</div>
          <div className="mt-2 text-3xl font-bold">{stats ? `${stats.avgBattery}%` : '—'}</div>
          <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
            <TrendingDown className="h-4 w-4 text-red-600" /> drain
          </div>
        </motion.div>
      </div>
    </section>
  );
}
