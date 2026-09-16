import { Coffee, MapPin, MessageCircle } from "lucide-react";

export function BottomMobileNav() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-3 gap-2 rounded-full border border-white/70 bg-white/90 p-2 shadow-[0_18px_60px_rgba(53,36,23,0.22)] backdrop-blur-xl md:hidden">
      <a
        href="#menu"
        className="flex items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-black text-stone-700"
      >
        <Coffee size={16} aria-hidden="true" />
        Menu
      </a>
      <a
        href="#lokasi"
        className="flex items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-black text-stone-700"
      >
        <MapPin size={16} aria-hidden="true" />
        Lokasi
      </a>
      <a
        href="https://wa.me/6281554223866"
        className="flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-3 py-3 text-xs font-black text-white"
      >
        <MessageCircle size={16} aria-hidden="true" />
        Chat
      </a>
    </div>
  );
}

export default BottomMobileNav;
