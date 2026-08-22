import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/content';
import ProjectDetailModal, { type Project } from '../components/ProjectDetailModal';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Projects" title="A portfolio ready for your next chapter" description="The layouts below are intentionally polished placeholders so your real case studies can be dropped in later without redesigning the structure." />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -8, scale: 1.01 }}
            onClick={() => setSelectedProject(project as Project)}
            className="group cursor-pointer overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-shadow hover:shadow-[0_20px_50px_rgba(255,122,26,0.08)]"
          >
            <div className="relative h-64 overflow-hidden">
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-[#ff7a1a]/20" />

              {/* Optional Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,26,0.35),_transparent_60%)]" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl tracking-[0.16em] text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] tracking-[0.26em] text-white">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-[#f5e9db]/75">
                {project.blurb}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectDetailModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
