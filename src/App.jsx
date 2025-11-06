import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Analytics />
        <section id="alerts" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8">
            <h3 className="text-xl font-bold">Smart Alerts</h3>
            <p className="mt-2 text-gray-700">Get notified when bins reach critical levels and auto-generate optimized pickup routes.</p>
            <div id="get-started" className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="rounded-full bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-colors">Enable Alerts</a>
              <a href="#" className="rounded-full bg-black/5 text-gray-900 px-6 py-3 font-medium hover:bg-black/10 transition-colors">Learn More</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
