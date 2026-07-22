import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/content';

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Experience" title="A career shaped across branding and culture" description="Each role contributed to a deeper understanding of storytelling, collaboration, and visual communication." />
      <div className="mt-10 space-y-6">
        {experiences.map((item) => (
          <div key={item.company} className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">{item.year}</p>
                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.18em]">{item.company}</h3>
                <p className="mt-2 text-lg text-[#f5e9db]/80">{item.role}</p>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-[#f5e9db]/80">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff7a1a]" />{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
