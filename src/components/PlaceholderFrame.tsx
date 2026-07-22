interface PlaceholderFrameProps {
  label: string;
  className?: string;
}

export default function PlaceholderFrame({ label, className = '' }: PlaceholderFrameProps) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-[#ff7a1a]/20 bg-[#171717] p-6 shadow-[10px_10px_0_rgba(255,122,26,0.1)] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(126,217,87,0.15),_transparent_55%)]" />
      <div className="relative flex min-h-[220px] flex-col items-start justify-between rounded-[1.5rem] border border-dashed border-[#ff7a1a]/20 bg-[#111111] p-6">
        <span className="rounded-full border border-[#ff7a1a]/20 bg-[#1d1d1d] px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-[#f5e9db]/70">
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
