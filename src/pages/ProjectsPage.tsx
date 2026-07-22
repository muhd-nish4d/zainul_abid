import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/content';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Projects" title="A portfolio ready for your next chapter" description="The layouts below are intentionally polished placeholders so your real case studies can be dropped in later without redesigning the structure." />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.07 }} whileHover={{ y: -8, scale: 1.01 }} className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#ff7a1a]/20 via-transparent to-white/10 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,26,0.45),_transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl uppercase tracking-[0.16em]">{project.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-[#f5e9db]/70">{project.category}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-7 text-[#f5e9db]/75">{project.blurb}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
