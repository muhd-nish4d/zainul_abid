interface PlaceholderFrameProps {
  label: string;
  className?: string;
}

export default function PlaceholderFrame({ label, className = '' }: PlaceholderFrameProps) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,26,0.3),_transparent_60%)]" />
      <div className="relative flex min-h-[220px] flex-col items-start justify-between rounded-[1.5rem] border border-white/10 bg-[#0f0f0f]/80 p-6">
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-[#f5e9db]/70">
          Placeholder
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#f5e9db]/50">Replace later</p>
          <h3 className="mt-2 text-xl font-semibold uppercase tracking-[0.2em]">{label}</h3>
        </div>
      </div>
    </div>
  );
}
