import { Coffee, Music2, Wifi } from "lucide-react";
import siteContent from "../../data/siteContent.json";
import { SectionHeading } from "../ui/SectionHeading";

const { experiences } = siteContent;

const experienceIcons = {
  Coffee,
  Music2,
  Wifi,
};

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

export default ExperienceSection;
