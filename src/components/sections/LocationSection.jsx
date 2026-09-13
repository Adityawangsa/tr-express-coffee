import { CalendarDays, Clock3, MapPin, MessageCircle } from "lucide-react";

export function LocationSection() {
  return (
    <section id="lokasi" className="px-4 pb-28">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-stone-950 text-white md:grid-cols-[0.85fr_1.15fr]">
        <div className="p-8 md:p-10 lg:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c89b6b]">
            Visit us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Datang untuk kopi, tinggal untuk suasananya.
          </h2>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-[#c89b6b]" size={21} aria-hidden="true" />
              <div>
                <p className="font-bold">Jl. Garasi Motor No. 12, Kediri</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Dekat area kampus dan coworking district.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-1 shrink-0 text-[#c89b6b]" size={21} aria-hidden="true" />
              <div>
                <p className="font-bold">Setiap hari, 08.00 - 22.00</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Reservasi disarankan untuk event dan workshop.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CalendarDays className="mt-1 shrink-0 text-[#c89b6b]" size={21} aria-hidden="true" />
              <div>
                <p className="font-bold">Community night tiap Jumat</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Live session, tasting, dan sharing kreatif.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281554223866"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-stone-950 transition hover:bg-[#c89b6b]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://maps.google.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              <MapPin size={18} aria-hidden="true" />
              Google Maps
            </a>
          </div>
        </div>
        <div className="min-h-[420px] bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(139,94,52,0.35)),url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center" />
      </div>
    </section>
  );
}

export default LocationSection;
