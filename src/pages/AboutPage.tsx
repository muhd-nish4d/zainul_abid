import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import heroImage from '../assets/hero.jpeg';
import { aboutSections, profile, skills, software } from '../data/content';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <SectionHeading eyebrow="About" title="The maker behind the work" description="A designer focused on brand clarity, story, and visual rhythm." />
          <p className="text-base leading-6 text-[#f5e9db]/80">{profile.bio[0]}</p>
          <p className="mt-5 text-base leading-6 text-[#f5e9db]/80">{profile.bio[1]}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Experience</p>
              <p className="mt-3 text-3xl font-semibold">{profile.experienceYears}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Current Role</p>
              <p className="mt-3 text-3xl font-semibold">{profile.currentRole}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <img src={heroImage} alt="Portrait" className="h-full min-h-[420px] w-full rounded-[1.4rem] object-cover object-center" />
        </motion.div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {aboutSections.map((section) => (
          <motion.div key={section.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <h3 className="text-lg font-semibold tracking-[0.2em]">{section.title}</h3>
            <p className="mt-4 text-sm leading-8 text-[#f5e9db]/75">{section.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Software</h3>
          <div className="mt-8 space-y-5">
            {software.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex items-center justify-between text-sm tracking-[0.2em]">
                  <span>{tool.name}</span>
                  <span className="text-[#ff7a1a]">{tool.score}</span>
                </div>
                <div className="h-2 rounded-full bg-[#2a2a2a]">
                  <div className="h-2 rounded-full bg-[#ff7a1a]" style={{ width: `${(Number(tool.score.split('/')[0]) / 10) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#ff7a1a]/12 to-transparent p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Skills</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm tracking-[0.2em]">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
