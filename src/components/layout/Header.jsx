import { useState } from "react";
import { ArrowRight, Coffee, Menu as MenuIcon } from "lucide-react";
import siteContent from "../../data/siteContent.json";

const { navigation } = siteContent;

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      {/* Container utama header agar konten dapat terpusat dan lebar maksimal tetap terjaga */}
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_60px_rgba(53,36,23,0.12)] backdrop-blur-xl">
          {/* Logo website */}
          <a href="#home" className="flex items-center gap-3" aria-label="TR Express Coffee home">
            <span className="grid size-10 place-items-center rounded-full bg-emerald-950 text-white">
              <Coffee size={19} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-black leading-none tracking-tight">
                TR Express
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Coffee
              </span>
            </span>
          </a>

          {/* Grup tautan navigasi untuk layar desktop */}
          <div className="hidden items-center gap-1 rounded-full bg-stone-100 p-1 md:flex">
            {/* Menampikan list navigasi dengan loop */}
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-stone-600 transition hover:bg-white hover:text-stone-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <a
            href="https://wa.me/6281554223866"
            className="hidden items-center gap-2 rounded-full bg-[#8b5e34] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#8b5e34]/20 transition hover:bg-emerald-900 md:inline-flex"
          >
            Reservasi
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <button
            className="grid size-10 place-items-center rounded-full bg-stone-100 text-stone-900 md:hidden"
            type="button"
            aria-label="Buka menu navigasi"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <MenuIcon size={20} aria-hidden="true" />
          </button>
        </nav>

        {/* Conditional Rendering */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-3 rounded-3xl border border-white/70 bg-white/95 p-3 shadow-[0_18px_60px_rgba(53,36,23,0.14)] backdrop-blur-xl md:hidden"
          >
            {/* Kontainer menu navigasi yang muncul hanya di perangkat mobile */}
            <div className="grid gap-1">
              {navigation.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-black text-stone-700 transition hover:bg-stone-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/6281554223866"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-950 px-4 py-3 text-sm font-black text-white"
              >
                Reservasi
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
