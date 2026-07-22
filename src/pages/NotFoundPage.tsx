import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#ff7a1a]">404</p>
        <h1 className="mt-4 text-5xl font-semibold uppercase tracking-[0.2em] sm:text-6xl">Page lost in the collage</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#f5e9db]/80">The page you were looking for has drifted off the board. Head back to the studio and browse the portfolio.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#ff7a1a] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#060606] transition hover:bg-[#ff9f4a]">Back home</Link>
      </div>
    </div>
  );
}
