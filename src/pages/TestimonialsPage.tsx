import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/content';

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Testimonials" title="Kind words from collaborators" description="A small selection of professional impressions from people who valued the process and outcome." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.author} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="mb-6 h-1.5 w-16 rounded-full bg-[#ff7a1a]" />
            <p className="text-base leading-8 text-[#f5e9db]/80">“{item.quote}”</p>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">{item.author}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#f5e9db]/60">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
