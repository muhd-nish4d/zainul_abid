import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiInstagram, FiMail } from 'react-icons/fi';
import PlaceholderFrame from '../components/PlaceholderFrame';
import { profile, projects, services } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LandingPage() {
  useScrollReveal();

  return (
    <div className="overflow-hidden bg-transparent">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} data-reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#ff7a1a]">{profile.nickname} • {profile.currentRole}</p>
          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[0.16em] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-[#ff7a1a] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#060606] transition hover:bg-[#ff9f4a] hover:text-[#060606]">
              Let&apos;s work together
            </Link>
            <a href={profile.resumeUrl} className="rounded-full border border-[#ff7a1a]/30 px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#f5e9db] transition hover:border-[#ff7a1a] hover:text-[#ff7a1a]">
              Download Resume
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm uppercase tracking-[0.25em] text-black/60">
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#ff7a1a]"> <FiInstagram /> Instagram</a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-[#ff7a1a]"> <FiMail /> Email</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative" data-reveal>
          <PlaceholderFrame label="Add Hero Image" className="min-h-[480px]" />
          <div className="absolute -bottom-6 -left-4 rotate-[-6deg] rounded-full border border-[#ff7a1a]/20 bg-[#ff7a1a] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#060606] shadow-lg">
            {profile.availability}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-[#ff7a1a]/20 bg-[#101010]" data-reveal>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6 px-4 py-6 text-sm uppercase tracking-[0.25em] text-black/70 sm:px-6 lg:px-8">
          <span>4 Years Experience</span>
          <span>Based in Doha, Qatar</span>
          <span>Freelancer • Open for Projects</span>
          <span>English • Malayalam</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-[#ff7a1a]/20 bg-[#171717] p-8 shadow-[14px_14px_0_rgba(255,122,26,0.12)]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">About</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.18em]">Designing with clarity, craft, and culture.</h2>
            <p className="mt-6 text-base leading-8 text-black/70">{profile.bio[0]}</p>
            <p className="mt-4 text-base leading-8 text-black/70">{profile.bio[1]}</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#f5e9db] hover:text-[#ff7a1a]">Read Full Story <FiArrowRight /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-[#ff7a1a]/20 bg-[#1a1a1a] p-6">
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold uppercase tracking-[0.18em]">Projects ready to be replaced</h2>
          </div>
          <Link to="/projects" className="hidden text-sm uppercase tracking-[0.3em] hover:text-[#ff7a1a] md:block">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -8, rotate: -1 }} className="rounded-[2rem] border border-[#ff7a1a]/20 bg-[#1a1a1a] p-6 shadow-[10px_10px_0_rgba(255,122,26,0.08)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#ff7a1a]">{project.category}</p>
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.18em]">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/70">{project.blurb}</p>
              <div className="mt-6 h-44 rounded-[1.5rem] border border-dashed border-[#ff7a1a]/20 bg-[#111111] p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-black/40">Add Project Image</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
