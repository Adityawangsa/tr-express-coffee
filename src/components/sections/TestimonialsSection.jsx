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

export default TestimonialsSection;
