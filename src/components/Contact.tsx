export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative px-6 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-old-english text-xs tracking-[0.4em] text-slate-500 flex items-center gap-3 mb-6">
          <span className="asterisk">✳</span>
          <span>CONTACT</span>
          <span className="asterisk">✳</span>
        </p>
        <p className="font-old-english text-2xl md:text-3xl text-slate-900 mb-5">
          Let&apos;s build something.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-[0.7rem] md:text-xs uppercase tracking-[0.3em] text-slate-700">
          <a
            href="#"
            className="relative pb-1 hover:text-black"
          >
            <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-500 after:transition-all after:duration-200 hover:after:w-full">
              GitHub
            </span>
          </a>
          <span className="asterisk text-sm">✳</span>
          <a
            href="#"
            className="relative pb-1 hover:text-black"
          >
            <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-500 after:transition-all after:duration-200 hover:after:w-full">
              LinkedIn
            </span>
          </a>
          <span className="asterisk text-sm">✳</span>
          <a
            href="mailto:you@example.com"
            className="relative pb-1 hover:text-black"
          >
            <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-500 after:transition-all after:duration-200 hover:after:w-full">
              Email
            </span>
          </a>
          <span className="asterisk text-sm">✳</span>
          <a
            href="#"
            className="relative pb-1 hover:text-black"
          >
            <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-500 after:transition-all after:duration-200 hover:after:w-full">
              Twitter / X
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

