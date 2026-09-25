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
          isDark ? "text-accent" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight font-hanken md:text-5xl ${
          isDark ? "text-text-inverse" : "text-text"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-sm leading-7 md:text-base ${
          isDark ? "text-text-light" : "text-text-muted"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
