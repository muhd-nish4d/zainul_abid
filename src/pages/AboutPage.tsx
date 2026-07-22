import PlaceholderFrame from '../components/PlaceholderFrame';
import SectionHeading from '../components/SectionHeading';
import { aboutSections, profile, skills, software } from '../data/content';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow="About" title="The maker behind the work" description="A designer focused on brand clarity, story, and visual rhythm." />
          <p className="text-lg leading-9 text-black/70">{profile.bio[0]}</p>
          <p className="mt-5 text-lg leading-9 text-black/70">{profile.bio[1]}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[#fdf6eb] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#7ED957]">Experience</p>
              <p className="mt-3 text-3xl font-semibold">{profile.experienceYears}</p>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-[#fdf6eb] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#7ED957]">Current Role</p>
              <p className="mt-3 text-3xl font-semibold">{profile.currentRole}</p>
            </div>
          </div>
        </div>
        <PlaceholderFrame label="Add About Image" className="min-h-[440px]" />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {aboutSections.map((section) => (
          <div key={section.title} className="rounded-[2rem] border border-black/10 bg-[#fdf6eb] p-7">
            <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">{section.title}</h3>
            <p className="mt-4 text-sm leading-8 text-black/70">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2.5rem] border border-black/10 bg-[#fdf6eb] p-8">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Software</h3>
          <div className="mt-8 space-y-5">
            {software.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex items-center justify-between text-sm uppercase tracking-[0.2em]">
                  <span>{tool.name}</span>
                  <span className="text-[#7ED957]">{tool.score}</span>
                </div>
                <div className="h-2 rounded-full bg-[#efe3cf]">
                  <div className="h-2 rounded-full bg-[#7ED957]" style={{ width: `${(Number(tool.score.split('/')[0]) / 10) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-black/10 bg-[#fefbf7] p-8">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Skills</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-black/10 bg-[#f8efe1] px-4 py-2 text-sm uppercase tracking-[0.2em]">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
