import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, BatteryMedium, Signal, AlertTriangle } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Dashboard() {
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/bins`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setBins(data);
      } catch (e) {
        setError('Unable to load bins. Backend may be offline.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="overview" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Bin Overview</h2>
          <p className="text-gray-600">Real-time status of connected smart bins.</p>
        </div>
      </div>

      {loading && <p className="mt-8 text-gray-600">Loading bins...</p>}
      {error && <p className="mt-8 text-red-600">{error}</p>}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bins.map((bin) => (
          <motion.div
            key={bin.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-900">{bin.name}</div>
              {bin.fillLevel >= 80 ? (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
                  <AlertTriangle className="h-4 w-4" /> High
                </span>
              ) : (
                <span className="text-xs text-green-600">Normal</span>
              )}
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-700">
              <MapPin className="h-4 w-4 text-gray-500" /> {bin.location}
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
              <div
                className={`h-2 rounded-full ${bin.fillLevel > 80 ? 'bg-red-500' : bin.fillLevel > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                style={{ width: `${bin.fillLevel}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-700">
              <div className="inline-flex items-center gap-2">
                <BatteryMedium className="h-4 w-4 text-gray-500" /> {bin.battery}%
              </div>
              <div className="inline-flex items-center gap-2">
                <Signal className="h-4 w-4 text-gray-500" /> {bin.signal} dBm
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
