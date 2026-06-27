import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CalendarDays,
  Coffee,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Music2,
  Quote,
  Star,
  Wifi,
} from "lucide-react";
import siteContent from "../data/siteContent.json";

const {
  navigation,
  menuCategories,
  menuItems,
  experiences,
  team,
  stats,
  timeline,
  testimonials,
  featureHighlights,
} = siteContent;

const experienceIcons = {
  Coffee,
  Music2,
  Wifi,
};

const MENU_PREVIEW_LIMIT = 4;
const SPLASH_DURATION_MS = 2000;

function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${isDark ? "text-[#c89b6b]" : "text-emerald-700"
          }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-5xl ${isDark ? "text-white" : "text-stone-950"
          }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 md:text-base ${isDark ? "text-emerald-50/75" : "text-stone-600"
          }`}
      >
        {description}
      </p>
    </div>
  );
}

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_DURATION_MS);

    return () => window.clearTimeout(splashTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen" role="status" aria-label="Memuat TR Express Coffee">
      <div className="splash-logo">
        <div className="splash-logo__mark">
          <Coffee size={44} strokeWidth={2.3} aria-hidden="true" />
        </div>
        <p className="splash-logo__brand">TR Express</p>
        <p className="splash-logo__caption">Coffee</p>
      </div>
    </div>
  );
}

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

export function FeatureHighlights() {
  return (
    <section className="border-y border-stone-200 bg-white px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {featureHighlights.items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm font-semibold text-stone-700">
            <CheckCircle2 className="text-emerald-700" size={20} aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [visibleMenuCount, setVisibleMenuCount] = useState(MENU_PREVIEW_LIMIT);

  const filteredMenu = useMemo(() => {
    if (activeCategory === "Semua") return menuItems.items;
    return menuItems.items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const displayedMenu = filteredMenu.slice(0, visibleMenuCount);
  const shouldShowMoreButton = filteredMenu.length > visibleMenuCount;
  const remainingMenuCount = filteredMenu.length - visibleMenuCount;
  const nextMenuCount = Math.min(MENU_PREVIEW_LIMIT, remainingMenuCount);

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setVisibleMenuCount(MENU_PREVIEW_LIMIT);
  }

  function handleShowMoreMenu() {
    setVisibleMenuCount((currentCount) => currentCount + MENU_PREVIEW_LIMIT);
  }

  return (
    <section id="menu" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] md:items-end">
          <SectionHeading
            eyebrow="Signature menu"
            title="Menu unggulan yang langsung membantu pengunjung memilih."
            description="Section ini menambah nilai bisnis karena pengunjung tidak hanya melihat suasana, tapi juga tahu produk apa yang paling layak dicoba."
          />
          <div className="flex flex-wrap justify-start gap-2 md:justify-end">
            {menuCategories.items.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${activeCategory === category
                  ? "bg-emerald-950 text-white shadow-lg shadow-emerald-950/15"
                  : "border border-stone-300 bg-white text-stone-700 hover:border-emerald-900 hover:text-emerald-900"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {displayedMenu.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-800">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black text-stone-950">{item.name}</h3>
                  <p className="rounded-full bg-[#f1e0cc] px-3 py-1 text-sm font-black text-[#7a4f2a]">
                    {item.price}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Menampilkan data yang masih banyak */}
        {shouldShowMoreButton && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleShowMoreMenu}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-950/15 transition hover:bg-emerald-800"
            >
              Tampilkan {nextMenuCount} menu lainnya
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-emerald-950 px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading
            eyebrow="Experience"
            title="Bukan hanya tempat minum kopi, tapi ruang untuk aktivitas."
            description="Fitur experience membuat brand terasa hidup dan memberi alasan berbeda bagi pengunjung untuk datang kembali."
            tone="dark"
          />
          <p className="max-w-xl text-sm leading-7 text-emerald-50/75 md:justify-self-end">
            Dalam project portfolio, section ini menunjukkan kemampuan menggabungkan visual asset,
            icon, copywriting, dan layout responsive dalam satu sistem desain.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiences.items.map((item) => {
            const Icon = experienceIcons[item.iconName] ?? Coffee;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white/8 ring-1 ring-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
                </div>
                <div className="relative -mt-14 p-6">
                  <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-[#c89b6b] text-emerald-950">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-emerald-50/75">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="People behind the bar"
          title="Tim kecil yang menjaga rasa dan pengalaman."
          description="Profil team membuat coffee shop terasa manusiawi. Ini juga memperlihatkan kemampuan membuat card UI yang reusable dan konsisten."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {team.items.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
            >
              <img src={person.image} alt={person.name} className="h-80 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  {person.role}
                </p>
                <h3 className="mt-2 text-2xl font-black text-stone-950">{person.name}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{person.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="border-y border-stone-200 bg-white px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
            alt="Fasad coffee shop dengan area duduk outdoor"
            className="h-[460px] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="About us"
            title="Dimulai dari garasi, tumbuh menjadi ruang komunitas."
            description="Timeline membantu cerita brand terasa konkret. Pengunjung dapat memahami perjalanan coffee shop tanpa membaca paragraf panjang."
          />
          <div className="mt-8 space-y-4">
            {timeline.items.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[88px_1fr] rounded-2xl border border-stone-200 bg-[#fbf7f0] p-4"
              >
                <p className="font-black text-[#8b5e34]">{item.year}</p>
                <p className="text-sm font-semibold leading-6 text-stone-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trust signal yang membuat halaman terasa profesional."
          description="Review pendek memberikan bukti sosial dan meningkatkan keyakinan pengunjung sebelum melakukan aksi."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <Quote className="text-[#8b5e34]" size={28} aria-hidden="true" />
              <p className="mt-5 text-sm leading-7 text-stone-700">"{review.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-5">
                <div>
                  <p className="font-black text-stone-950">{review.name}</p>
                  <p className="text-sm text-stone-500">{review.role}</p>
                </div>
                <div className="flex text-[#c08a4c]" aria-label="Rating 5 dari 5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-stone-950">TR Express Coffee</p>
          <p className="mt-2 text-sm text-stone-500">
            One-page coffee shop profile built with React and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold text-stone-600">
          {navigation.items.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-emerald-800">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

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
        Maps
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
