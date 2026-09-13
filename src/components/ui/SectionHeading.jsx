export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
          isDark ? "text-[#c89b6b]" : "text-emerald-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-5xl ${
          isDark ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 md:text-base ${
          isDark ? "text-emerald-50/75" : "text-stone-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
