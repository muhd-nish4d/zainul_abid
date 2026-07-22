import SectionHeading from '../components/SectionHeading';
import { certificates, education } from '../data/content';

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Education" title="Academic roots in multimedia" description="A foundation in design thinking, media, and storytelling shaped the way the work is approached today." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">{item.period}</p>
            <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.18em]">{item.degree}</h3>
            <p className="mt-3 text-lg text-[#f5e9db]/80">{item.institution}</p>
          </div>
        ))}
        {certificates.map((item) => (
          <div key={item.title} className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#ff7a1a]/12 to-transparent p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">Certificate</p>
            <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.18em]">{item.title}</h3>
            <p className="mt-3 text-lg text-[#f5e9db]/80">{item.issuer}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#f5e9db]/60">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
