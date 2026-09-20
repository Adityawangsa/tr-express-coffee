import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import siteContent from "../../data/siteContent.json";
import { SectionHeading } from "../ui/SectionHeading";

const { menuCategories, menuItems } = siteContent;
const MENU_PREVIEW_LIMIT = 4;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [visibleMenuCount, setVisibleMenuCount] = useState(MENU_PREVIEW_LIMIT);

  const filteredMenu = useMemo(() => {
    // jika kategori == semua, maka tampilkan semua menu, jika tidak, maka tampilkan menu berdasarkan kategori yang dipilih
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
          {/* Judul section */}
          <SectionHeading
            eyebrow="Signature menu"
            title="Menu unggulan yang langsung membantu pengunjung memilih."
            description="Section ini menambah nilai bisnis karena pengunjung tidak hanya melihat suasana, tapi juga tahu produk apa yang paling layak dicoba."
          />

          {/* Tombol kategori */}
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

        {/* Menu cards grid */}
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

        {/* Menampilkan tombol jika masih ada data yang belum ditampilkan */}
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

export default MenuSection;
