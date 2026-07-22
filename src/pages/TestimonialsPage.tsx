import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/content';

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Testimonials" title="Kind words from collaborators" description="A small selection of professional impressions from people who valued the process and outcome." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.author} className="rounded-[2rem] border border-[#ff7a1a]/20 bg-[#1a1a1a] p-8">
            <p className="text-base leading-8 text-black/70">“{item.quote}”</p>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">{item.author}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-black/50">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
