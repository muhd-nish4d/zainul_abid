import { motion } from 'framer-motion';
import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import heroImage from '../assets/hero.jpeg';
import { experiences, profile, projects, services, skills, testimonials } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectDetailModal, { type Project } from '../components/ProjectDetailModal';

export default function LandingPage() {
  useScrollReveal();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleTilt = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ rotateX: y * -6, rotateY: x * 8 });
  };

  return (
    <div className="overflow-hidden bg-transparent">
      <section className="relative flex min-h-[100svh] items-end overflow-hidden px-4 pb-8 pt-24 sm:px-6 lg:items-center lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,26,0.18),_transparent_36%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.06),_transparent_24%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src={heroImage}
            alt={`${profile.name} portrait`}
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/75 to-transparent lg:from-[#060606] lg:via-[#060606]/75 lg:to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-end gap-8 pb-4 lg:flex-row lg:items-end lg:justify-between lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-reveal
            className="
        max-w-2xl
        p-0
        sm:p-6
        lg:p-10
        lg:rounded-[2rem]
        lg:border
        lg:border-white/10
        lg:bg-black/25
        lg:backdrop-blur-xl
      "
          >
            <p className="mb-5 text-[0.7rem] tracking-[0.35em] text-[#ff7a1a]">
              {profile.nickname} • {profile.currentRole}
            </p>

            <h1 className="text-5xl font-black leading-[0.9] tracking-[0.05em] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#f5e9db]/80">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-[0.72rem] tracking-[0.18em] text-[#f5e9db]/70">
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[#ff7a1a]"
              >
                <FiInstagram />
                Instagram
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[#ff7a1a]"
              >
                <FiLinkedin />
                LinkedIn
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition hover:text-[#ff7a1a]"
              >
                <FiMail />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onMouseMove={handleTilt}
            onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
            className="hidden w-[320px] max-w-[34vw] self-end lg:block"
            data-reveal
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <img
                src={heroImage}
                alt="Creative portrait"
                className="h-[480px] w-full rounded-[1.4rem] object-cover object-center"
                style={{
                  transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                }}
              />

              <div className="absolute inset-x-6 bottom-6 h-20 rounded-full bg-[#ff7a1a]/20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8" data-reveal>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#ff7a1a]">About</p>
            <h2 className="mt-4 text-3xl tracking-[0.16em] sm:text-4xl">Designing with clarity, craft, and culture.</h2>
            <p className="mt-6 text-base leading-6 text-[#f5e9db]/80">{profile.bio[0]}</p>
            <p className="mt-4 text-base leading-6 text-[#f5e9db]/80">{profile.bio[1]}</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.3em] text-[#f5e9db] transition hover:text-[#ff7a1a]">Read Full Story <FiArrowRight /></Link>
          </motion.div>

          <div className="grid gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Experience</p>
              <p className="mt-4 text-4xl font-semibold">{profile.experienceYears}</p>
              <p className="mt-3 text-sm tracking-[0.24em] text-[#f5e9db]/70">Creative designer based in Doha, Qatar</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#ff7a1a]/15 to-transparent p-6 backdrop-blur-xl">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Availability</p>
              <p className="mt-4 text-xl tracking-[0.2em]">{profile.availability}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8" data-reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Featured Projects</p>
            <h2 className="mt-2 text-3xl tracking-[0.16em] sm:text-4xl">Select work ready for a premium reveal.</h2>
          </div>
          <Link to="/projects" className="text-[0.7rem] uppercase tracking-[0.3em] transition hover:text-[#ff7a1a]">View all</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => setSelectedProject(project as Project)}
              className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-shadow hover:shadow-[0_20px_50px_rgba(255,122,26,0.08)]"
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

                {/* Orange Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-[#ff7a1a]/20" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#ff7a1a]">
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
                <p className="text-sm leading-7 text-[#f5e9db]/70">
                  {project.blurb.slice(0, 100)}{project.blurb.length > 100 ? "..." : ""}
                </p>

                {/* {project.blurb.length > 100 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }));
                    }}
                    className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#ff7a1a] hover:text-white transition"
                  >
                    {expanded[index] ? "Read Less" : "Read More"}
                  </button>
                )} */}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project as Project);
                  }}
                  className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.3em] text-[#f5e9db] transition hover:text-[#ff7a1a]"
                >
                  View Project <FiArrowRight />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8" data-reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Services</p>
            <h2 className="mt-2 text-3xl tracking-[0.16em] sm:text-4xl">Crafted for modern brands and cultural storytelling.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -8, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">0{index + 1}</span>
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff7a1a]" />
              </div>
              <h3 className="text-xl tracking-[0.16em]">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#f5e9db]/75">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8" data-reveal>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Experience Timeline</p>
            <div className="mt-8 space-y-6">
              {experiences.map((item) => (
                <div key={item.company} className="border-l border-white/10 pl-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#ff7a1a]">{item.year}</p>
                  <h3 className="mt-2 text-xl tracking-[0.16em]">{item.company}</h3>
                  <p className="mt-1 text-sm tracking-[0.2em] text-[#f5e9db]/70">{item.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#ff7a1a]/12 to-transparent p-8 backdrop-blur-xl">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Skills</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[0.72rem] tracking-[0.24em] text-[#f5e9db]/80">{skill}</span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">Testimonials</p>
              <p className="mt-4 text-base leading-8 text-[#f5e9db]/80">“{testimonials[0].quote}”</p>
              <p className="mt-4 text-[0.72rem] tracking-[0.26em] text-[#f5e9db]/70">{testimonials[0].author}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
        data-reveal
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2.5rem] border border-[#ff7a1a]/20 bg-gradient-to-r from-[#ff7a1a]/15 via-transparent to-[#ffffff]/5 p-8 backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[#ff7a1a]">
                Contact
              </p>

              <h2 className="mt-3 text-3xl tracking-[0.16em] sm:text-4xl">
                Ready to shape something memorable?
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#ff7a1a] px-6 py-3 text-[0.72rem] tracking-[0.3em] text-[#060606] transition hover:bg-[#ff9f4a]"
                >
                  Let&apos;s work together
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <a
                  href={profile.resumeUrl}
                  className="rounded-full border border-white/15 px-6 py-3 text-[0.72rem] tracking-[0.3em] text-[#f5e9db] transition hover:border-[#ff7a1a] hover:text-[#ff7a1a]"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-[#ff7a1a] px-6 py-3 text-[0.72rem] tracking-[0.3em] text-[#060606] transition hover:bg-[#ff9f4a]"
      >
        Start a conversation <FiArrowRight />
      </Link> */}
          </div>
        </motion.div>
      </section>

      <ProjectDetailModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
