export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-[#7ED957]/20 blur-3xl" />
      <div className="absolute bottom-[-8%] right-[-5%] h-72 w-72 rounded-full bg-[#f2c98d]/30 blur-3xl" />
    </div>
  );
}
