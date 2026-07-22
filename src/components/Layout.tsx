import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState, type ReactNode } from 'react';
import { navLinks, profile } from '../data/content';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer:fine)').matches) {
      return;
    }

    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY, active: true });
    const onLeave = () => setCursor((prev) => ({ ...prev, active: false }));

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-[#f5e9db]">
      <AnimatedBackground />
      <motion.div
        animate={{ x: cursor.x - 160, y: cursor.y - 160, opacity: cursor.active ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 24, mass: 0.4 }}
        className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-[#ff7a1a]/12 blur-[140px]"
      />

      <div className="relative z-10">
        <header className="fixed left-0 top-0 z-[100] w-full px-4 pt-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-3xl">
            <Link to="/" className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#f5e9db] sm:text-sm">
              {profile.brandName}
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-[#f5e9db] transition hover:border-[#ff7a1a]/40 hover:text-[#ff7a1a]"
              >
                Menu
              </button>
              <Link to={profile.resumeUrl} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-[#f5e9db] transition hover:border-[#ff7a1a]/40 hover:text-[#ff7a1a]">
                Resume
              </Link>
              <Link to="/contact" className="rounded-full bg-[#ff7a1a] px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-[#060606] transition hover:bg-[#ff9f4a]">
                Contact
              </Link>
            </div>

            <button className="rounded-full border border-white/10 bg-white/5 p-2 md:hidden" onClick={() => setOpen((value) => !value)}>
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute right-3 top-full mt-3 flex flex-col gap-2 rounded-[1.4rem] border border-white/10 bg-black/70 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl">
                {navLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} className={({ isActive }) => `rounded-full px-3 py-2 text-[0.7rem] uppercase tracking-[0.25em] transition ${isActive ? 'bg-[#ff7a1a] text-[#060606]' : 'text-[#f5e9db] hover:bg-white/10 hover:text-[#ff7a1a]'}`} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {open && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-3 rounded-[1.5rem] border border-white/10 bg-black/70 p-4 backdrop-blur-2xl md:hidden">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={({ isActive }) => `rounded-full px-3 py-2 text-[0.72rem] uppercase tracking-[0.25em] transition ${isActive ? 'bg-[#ff7a1a] text-[#060606]' : 'text-[#f5e9db] hover:bg-white/10 hover:text-[#ff7a1a]'}`} onClick={() => setOpen(false)}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 bg-[#0b0b0b]/90">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-[0.72rem] uppercase tracking-[0.24em] text-[#f5e9db]/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© 2026 {profile.brandName}. Crafted for impact.</p>
            <div className="flex gap-4">
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="transition hover:text-[#ff7a1a]">Instagram</a>
              <a href={profile.resumeUrl} className="transition hover:text-[#ff7a1a]">Resume</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
