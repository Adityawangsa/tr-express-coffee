import { CheckCircle2 } from "lucide-react";
import siteContent from "../../data/siteContent.json";

const { featureHighlights } = siteContent;

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

export default FeatureHighlights;
