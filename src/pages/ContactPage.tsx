import { FiMail, FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/content';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s create something memorable" description="Open to collaborations, commissions, and design opportunities that need care, rhythm, and strong visual thinking." />
          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-lg text-[#f5e9db]/80 hover:text-[#ff7a1a]"><FiMail /> {profile.email}</a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-lg text-[#f5e9db]/80 hover:text-[#ff7a1a]"><FiPhone /> {profile.phone}</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg text-[#f5e9db]/80 hover:text-[#ff7a1a]"><FiMessageCircle /> Instagram</a>
            <div className="flex items-center gap-3 text-lg text-[#f5e9db]/80"><FiMapPin /> {profile.location}</div>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#ff7a1a]/12 to-transparent p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.2em]">Quick Notes</h3>
          <p className="mt-5 text-base leading-8 text-[#f5e9db]/80">Available for branding, campaign design, editorial systems, social visuals, and polished print work. If you need a thoughtful creative partner, reach out and I’ll respond with a tailored approach.</p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-flex rounded-full bg-[#ff7a1a] px-6 py-3 text-sm tracking-[0.3em] text-[#060606] transition hover:bg-[#ff9f4a]">Start a conversation</a>
        </div>
      </div>
    </div>
  );
}
