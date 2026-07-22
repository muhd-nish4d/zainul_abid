import PlaceholderFrame from '../components/PlaceholderFrame';
import SectionHeading from '../components/SectionHeading';
import { galleryItems } from '../data/content';

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="Gallery" title="A scrapbook of visual moods" description="This gallery is intentionally structured for future edits, with space for your own photography, finished pieces, and process images." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {galleryItems.map((item) => (
          <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <PlaceholderFrame label={item.title} className="min-h-[260px]" />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#ff7a1a]">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
