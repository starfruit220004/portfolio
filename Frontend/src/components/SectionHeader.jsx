/**
 * SectionHeader
 * Props:
 *   label {string} — small uppercase eyebrow text
 *   title {string} — large serif heading
 */
export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-2">
      <p className="flex items-center gap-3 text-[0.65rem] md:text-[0.72rem] font-black text-[#7BA7D4] uppercase tracking-[0.4em] mb-4">
        <span className="inline-block w-8 h-[1px] bg-[#E8A8C0]" />
        {label}
      </p>
      <h2 className="font-serif text-[clamp(1.75rem,5vw,2.6rem)] font-light text-[#DDEEFF] leading-tight m-0">
        {title}
      </h2>
    </div>
  );
}