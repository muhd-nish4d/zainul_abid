import PlaceholderFrame from '../components/PlaceholderFrame';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/content';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Projects" title="A portfolio ready for your next chapter" description="The layouts below are intentionally polished placeholders so your real case studies can be dropped in later without redesigning the structure." />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.title} className="rounded-[2.5rem] border border-black/10 bg-[#fdf6eb] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.06)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.35em] text-[#7ED957]">0{index + 1}</span>
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em]">{project.category}</span>
            </div>
            <PlaceholderFrame label={project.title} className="min-h-[280px]" />
            <h3 className="mt-6 text-2xl font-semibold uppercase tracking-[0.18em]">{project.title}</h3>
            <p className="mt-4 text-sm leading-8 text-black/70">{project.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
