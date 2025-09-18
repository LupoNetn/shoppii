import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // optional icons

const Footer = () => {
  return (
    <footer className="text-black">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo / Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">Shopii</h2>
            <p className="text-sm text-gray-400 mt-1">
              © {new Date().getFullYear()} Shopii. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-gray-400">
          Built with ❤️ by your team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
