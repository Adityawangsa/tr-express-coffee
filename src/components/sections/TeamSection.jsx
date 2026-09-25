import siteContent from "../../data/siteContent.json";
import { SectionHeading } from "../ui/SectionHeading";

const { team } = siteContent;

export function TeamSection() {
  return (
    <section id="team" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Judul section */}
        <SectionHeading
          eyebrow="People behind the bar"
          title="Tim kecil yang menjaga rasa dan pengalaman."
          description="Profil team membuat coffee shop terasa manusiawi. Ini juga memperlihatkan kemampuan membuat card UI yang reusable dan konsisten."
          align="center"
        />

        {/* Team cards grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {team.items.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:shadow-md"
            >
              <img src={person.image} alt={person.name} className="h-80 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  {person.role}
                </p>
                <h3 className="mt-2 text-2xl font-black text-text font-hanken">{person.name}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{person.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
