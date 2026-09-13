import siteContent from "../../data/siteContent.json";

const { navigation } = siteContent;

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

export default Footer;
