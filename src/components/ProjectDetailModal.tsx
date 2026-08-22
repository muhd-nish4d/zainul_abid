import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export interface Project {
  title: string;
  category: string;
  blurb: string;
  image: string;
  relatedImage?: string[];
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  const [activeImage, setActiveImage] = useState<string>('');

  // Reset active image when project changes
  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Gather all images (main + related) for the gallery
  const allImages = [project.image, ...(project.relatedImage || [])];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0c0c0c]/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#f5e9db]/70 transition-all hover:border-[#ff7a1a]/50 hover:bg-[#ff7a1a]/10 hover:text-[#ff7a1a]"
              aria-label="Close modal"
            >
              <FiX size={18} />
            </button>

            {/* Layout Grid */}
            <div className="grid max-h-[85vh] grid-cols-1 overflow-y-auto md:grid-cols-12 md:overflow-visible">
              
              {/* Left Column: Image Previewer */}
              <div className="flex flex-col gap-4 p-6 sm:p-8 md:col-span-7">
                {/* Main Large Image Display */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:aspect-[3/2]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt={project.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* Thumbnails Row */}
                {allImages.length > 1 && (
                  <div className="scrollbar-none flex gap-3 overflow-x-auto py-1">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative aspect-[4/3] h-16 flex-shrink-0 overflow-hidden rounded-xl border transition-all duration-300 sm:h-20 ${
                          activeImage === img
                            ? 'border-[#ff7a1a] scale-[0.98] ring-2 ring-[#ff7a1a]/20'
                            : 'border-white/10 opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} gallery thumbnail ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Title & Description */}
              <div className="flex flex-col justify-between p-6 pt-0 sm:p-8 sm:pt-0 md:col-span-5 md:max-h-[85vh] md:overflow-y-auto md:py-8 md:pl-0">
                <div className="flex-grow md:pr-4">
                  {/* Category Eyebrow */}
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[#ff7a1a] font-medium">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="mt-2 text-2xl tracking-[0.12em] text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Divider Line */}
                  <div className="my-5 h-px bg-white/10" />

                  {/* Description Blurb */}
                  <div className="scrollbar-thin pr-1">
                    <p className="text-sm leading-8 text-[#f5e9db]/75 whitespace-pre-line">
                      {project.blurb}
                    </p>
                  </div>
                </div>

                {/* Optional Footer inside Right Column */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-[#f5e9db]/40">
                  <span>Selected Work</span>
                  <span>© {new Date().getFullYear()}</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
