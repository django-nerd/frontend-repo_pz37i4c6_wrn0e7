import { Github, Mail, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Leaf className="h-5 w-5 text-green-600" />
          <span className="font-semibold">SmartWaste</span>
          <span className="text-gray-400">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-gray-900 inline-flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a href="mailto:team@smartwaste.io" className="hover:text-gray-900 inline-flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
