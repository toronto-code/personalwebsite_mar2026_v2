export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 px-6 py-8 md:px-10 lg:px-20">
      <p className="text-center text-[0.65rem] tracking-[0.3em] uppercase text-slate-500 flex items-center justify-center gap-3">
        <span className="asterisk">✳</span>
        <span>YOUR NAME · {year}</span>
        <span className="asterisk">✳</span>
      </p>
    </footer>
  );
}

