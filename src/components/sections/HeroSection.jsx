import { ChevronRight, MapPin, Star } from "lucide-react";
import siteContent from "../../data/siteContent.json";

const { stats } = siteContent;

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
            <span className="size-2 rounded-full bg-emerald-600" />
            Open today 08.00 - 22.00
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-stone-950 md:text-7xl">
            Rasa kopi yang rapi untuk ruang yang produktif.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
            TR Express Coffee adalah kedai satu halaman yang dirancang untuk
            menunjukkan brand, menu, komunitas, dan aksi utama dengan UI modern
            bergaya SaaS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-950/20 transition hover:bg-emerald-800"
            >
              Lihat Menu
              <ChevronRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-4 text-sm font-bold text-stone-900 transition hover:border-emerald-900 hover:text-emerald-900"
            >
              <MapPin size={17} aria-hidden="true" />
              Buka Lokasi
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.items.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white bg-white/70 p-4 shadow-sm"
              >
                <p className="text-xl font-black text-stone-950">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-stone-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-10 hidden rounded-full bg-emerald-900 px-4 py-2 text-sm font-bold text-white shadow-2xl md:block">
            House blend ready
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white bg-stone-950 shadow-[0_30px_90px_rgba(60,38,23,0.28)]">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1300&q=85"
              alt="Interior coffee shop hangat dengan meja kayu dan suasana produktif"
              className="h-[560px] w-full object-cover opacity-100"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/25 bg-white/90 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#8b5e34] text-white">
                <Star size={20} fill="currentColor" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-stone-950">Signature this week</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  Garasi Aren Latte dengan espresso house blend dan gula aren smoky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
