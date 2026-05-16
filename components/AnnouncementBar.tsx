export default function AnnouncementBar() {
  return (
    <div className="bg-diva-pink text-white text-xs sm:text-sm font-sans font-semibold py-2.5 px-4 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 max-w-7xl mx-auto">
        <span>✨ All packages must be booked online</span>
        <span className="hidden sm:inline text-white/50">·</span>
        <span>🎂 Birthday packages: weekends only</span>
        <span className="hidden sm:inline text-white/50">·</span>
        <span>🎖️ 10% off for Military, Veterans & Teachers</span>
      </div>
    </div>
  );
}
