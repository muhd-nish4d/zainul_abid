import SectionHeading from '../components/SectionHeading';
import { skills, software } from '../data/content';

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Skills" title="A full-spectrum creative toolkit" description="The work is rooted in visual strategy, editorial thinking, branding, and polished execution across digital and print formats." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2.5rem] border border-[#ff7a1a]/20 bg-[#1a1a1a] p-8">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Software</h3>
          <div className="mt-8 space-y-5">
            {software.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex items-center justify-between text-sm uppercase tracking-[0.2em]">
                  <span>{tool.name}</span>
                  <span className="text-[#ff7a1a]">{tool.score}</span>
                </div>
                <div className="h-2 rounded-full bg-[#2b2b2b]">
                  <div className="h-2 rounded-full bg-[#ff7a1a]" style={{ width: `${(Number(tool.score.split('/')[0]) / 10) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-[#ff7a1a]/20 bg-[#171717] p-8">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Capabilities</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-[#ff7a1a]/20 bg-[#222222] px-4 py-2 text-sm uppercase tracking-[0.2em]">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
