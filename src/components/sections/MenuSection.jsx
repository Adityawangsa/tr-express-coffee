import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import siteContent from "../../data/siteContent.json";
import { SectionHeading } from "../ui/SectionHeading";

const { menuCategories, menuItems } = siteContent;
const MENU_PREVIEW_LIMIT = 4;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [visibleMenuCount, setVisibleMenuCount] = useState(MENU_PREVIEW_LIMIT);

  // useMemo akan melakukan recalculate atau perhitungan ulang hanya ketika nilai dependency berubah
  const filteredMenu = useMemo(() => {
    // jika kategori == semua, maka tampilkan semua menu, jika tidak, maka tampilkan menu berdasarkan kategori yang dipilih
    if (activeCategory === "Semua") return menuItems.items;
    return menuItems.items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // mengambil data yang akan ditampilkan
  const displayedMenu = filteredMenu.slice(0, visibleMenuCount);
  // button "tampilkan lebih" akan muncul jika masih ada data yang belum ditampilkan
  const shouldShowMoreButton = filteredMenu.length > visibleMenuCount;

  // hitung sisa data yang belum ditampilkan
  const remainingMenuCount = filteredMenu.length - visibleMenuCount;
  // tampilkan data sesuai dengan data yang belum ditampilkan atau sesuai dengan MENU_PREVIEW_LIMIT
  const nextMenuCount = Math.min(MENU_PREVIEW_LIMIT, remainingMenuCount);

  function handleCategoryChange(category) {
    setActiveCategory(category);
  }

  // ketika user klik tambah menu, maka jumlah batas display kartu akan ditambahkan
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
                className={`cursor-pointer rounded-full px-5 py-3 text-sm font-bold transition duration-100 ${
                  activeCategory === category
                    ? "bg-primary text-text-inverse shadow-lg shadow-primary/20"
                    : "border border-border bg-surface text-text hover:border-primary hover:text-primary"
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
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gambar */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-primary shadow-sm backdrop-blur">
                  {item.tag}
                </span>
              </div>
              {/* Isi Konten */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black text-text font-hanken">{item.name}</h3>
                  <p className="rounded-full bg-primary-light px-3 py-1 text-sm font-black text-primary font-hanken">
                    {item.price}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
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
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-text-inverse shadow-xl shadow-primary/20 transition hover:bg-primary-hover"
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
