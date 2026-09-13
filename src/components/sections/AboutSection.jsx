import siteContent from "../../data/siteContent.json";
import { SectionHeading } from "../ui/SectionHeading";

const { timeline } = siteContent;

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

export default AboutSection;
