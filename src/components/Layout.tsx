import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, type ReactNode } from 'react';
import { navLinks, profile } from '../data/content';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060606] text-[#f5e9db]">
      <AnimatedBackground />
      <header className="sticky top-0 z-40 border-b border-[#ff7a1a]/20 bg-[#0b0b0b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-[0.35em] text-[#f5e9db] uppercase">
            {profile.brandName}
          </Link>
          <nav className="hidden items-center gap-5 text-sm uppercase tracking-[0.25em] md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `transition ${isActive ? 'text-[#ff7a1a]' : 'hover:text-[#ff7a1a]'}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button className="rounded-full border border-black/15 p-2 md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#ff7a1a]/20 bg-[#0b0b0b] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.25em]">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={({ isActive }) => `transition ${isActive ? 'text-[#ff7a1a]' : 'hover:text-[#ff7a1a]'}`} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#ff7a1a]/20 bg-[#101010]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm uppercase tracking-[0.2em] text-black/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 {profile.brandName}. Crafted for impact.</p>
          <div className="flex gap-4">
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-[#7ED957]">Instagram</a>
            <a href={profile.resumeUrl} className="hover:text-[#7ED957]">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
