export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 md:px-10 lg:px-20"
    >
      <div className="max-w-3xl text-center md:text-left">
        <p className="font-old-english text-xs tracking-[0.4em] text-slate-500 mb-6">
          ✳ PORTFOLIO ✳
        </p>
        <h1 className="font-old-english text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-4">
          YOUR&nbsp;NAME
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 uppercase tracking-[0.3em] mb-6">
          software engineer. builder of things.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <span className="asterisk text-lg">✳</span>
        </div>
      </div>
    </section>
  );
}

