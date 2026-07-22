import SectionHeading from '../components/SectionHeading';
import { services } from '../data/content';

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Services" title="Crafted services for modern brands" description="Every offer is designed to support identity, communication, and growth through thoughtful visual systems." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[2rem] border border-black/10 bg-[#fdf6eb] p-8">
            <div className="mb-6 h-3 w-16 rounded-full bg-[#7ED957]" />
            <h3 className="text-xl font-semibold uppercase tracking-[0.2em]">{service.title}</h3>
            <p className="mt-4 text-sm leading-8 text-black/70">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
