import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-[#7ED957]">404</p>
      <h1 className="mt-4 text-5xl font-semibold uppercase tracking-[0.2em] sm:text-6xl">Page lost in the collage</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">The page you were looking for has drifted off the board. Head back to the studio and browse the portfolio.</p>
      <Link to="/" className="mt-8 rounded-full bg-[#151515] px-6 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-[#7ED957] hover:text-[#151515]">Back home</Link>
    </div>
  );
}
