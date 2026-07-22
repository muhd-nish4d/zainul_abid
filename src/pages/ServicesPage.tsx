import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/content';

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Services" title="Crafted services for modern brands" description="Every offer is designed to support identity, communication, and growth through thoughtful visual systems." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div key={service.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -8, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[0.7rem] uppercase tracking-[0.35em] text-[#ff7a1a]">0{index + 1}</span>
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff7a1a]" />
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-[0.2em]">{service.title}</h3>
            <p className="mt-4 text-sm leading-8 text-[#f5e9db]/75">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
