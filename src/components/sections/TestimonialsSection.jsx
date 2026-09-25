import { Quote, Star } from "lucide-react";
import siteContent from "../../data/siteContent.json";
import { SectionHeading } from "../ui/SectionHeading";

const { testimonials } = siteContent;

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
              className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition hover:shadow-md"
            >
              <Quote className="text-accent" size={28} aria-hidden="true" />
              <p className="mt-5 text-sm leading-7 text-text">"{review.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <p className="font-black text-text font-hanken">{review.name}</p>
                  <p className="text-sm text-text-light">{review.role}</p>
                </div>
                <div className="flex text-accent" aria-label="Rating 5 dari 5">
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

export default TestimonialsSection;
