import { ChevronRight, MapPin, Star } from "lucide-react";
import siteContent from "../../data/siteContent.json";

const { stats } = siteContent;

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/80 px-3 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Open today 08.00 - 22.00
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-text font-hanken md:text-7xl">
            Rasa kopi yang rapi untuk ruang yang produktif.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-text-muted md:text-lg">
            TR Express Coffee adalah kedai satu halaman yang dirancang untuk
            menunjukkan brand, menu, komunitas, dan aksi utama dengan UI modern
            bergaya SaaS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-text-inverse shadow-xl shadow-primary/25 transition hover:bg-primary-hover"
            >
              Lihat Menu
              <ChevronRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-4 text-sm font-bold text-text transition hover:border-primary hover:text-primary"
            >
              <MapPin size={17} aria-hidden="true" />
              Buka Lokasi
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.items.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-surface/80 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-xl font-black text-text font-hanken">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-text-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-10 hidden rounded-full bg-secondary px-4 py-2 text-sm font-bold text-text-inverse shadow-2xl md:block">
            House blend ready
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-sidebar shadow-[0_30px_90px_rgba(60,38,23,0.28)]">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1300&q=85"
              alt="Interior coffee shop hangat dengan meja kayu dan suasana produktif"
              className="h-[560px] w-full object-cover opacity-100"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-border bg-surface/90 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-white shadow-md shadow-accent/20">
                <Star size={20} fill="currentColor" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-text font-hanken">Signature this week</p>
                <p className="mt-1 text-sm leading-6 text-text-muted">
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
