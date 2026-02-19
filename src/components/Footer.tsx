import { Twitter, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-brand-dark rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Revane</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              The modern operating system for finance teams. Close faster, report better.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Revane Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Revane Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
