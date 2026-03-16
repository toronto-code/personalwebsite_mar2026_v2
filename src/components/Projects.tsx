\"use client\";

import { useState } from "react";

type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Chrome Studio",
    summary: "A minimal, metallic interface for composing and previewing UI concepts.",
    description:
      "Placeholder description for a flagship project. Describe the problem, how you approached the build, and anything opinionated about the design or architecture. Keep it sharp and specific.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-2",
    title: "Signal Grid",
    summary: "Real-time dashboard surfaces system health in a single, high-contrast grid.",
    description:
      "Placeholder text for a systems-focused project. Explain how you deal with streaming data, failure modes, and performance while keeping the UI calm and legible.",
    tech: ["React", "WebSockets", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-3",
    title: "Quiet Notes",
    summary: "A distraction-free notebook with gentle chrome detailing and fast search.",
    description:
      "Placeholder copy for a thoughtful product build. Talk about constraints, tradeoffs, and what you optimized for: speed, focus, reliability, or all three.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];

interface ProjectStackProps {
  onOpen: (project: Project) => void;
}

function ProjectStack({ onOpen }: ProjectStackProps) {
  const cards = PROJECTS.slice(0, 3);

  return (
    <div className="relative mx-auto mt-10 flex max-w-xl justify-center">
      {cards.map((project, index) => {
        const depth = cards.length - index;
        const offset = index * 10;
        const scale = 1 - index * 0.03;

        return (
          <button
            key={project.id}
            type="button"
            aria-label={`Open project ${project.title}`}
            onClick={() => onOpen(project)}
            className="group absolute inset-x-0 mx-auto w-full max-w-md origin-center transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            style={{
              transform: `translateY(${offset}px) scale(${scale})`,
              zIndex: depth,
            }}
          >
            <div className="metal-card rounded-xl px-6 py-5 text-left transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
              <h3 className="text-base md:text-lg font-semibold tracking-tight text-slate-900 mb-1">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {project.summary}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center px-4 py-10 md:px-8">
      <div className="absolute inset-0 bg-slate-200/40 backdrop-blur-[2px]" />
      <div className="relative z-10 w-full max-w-3xl">
        <div className="metal-card rounded-2xl px-6 py-6 md:px-10 md:py-8">
          <button
            type="button"
            onClick={onClose}
            className="ml-auto mb-4 block text-xs tracking-[0.4em] uppercase text-slate-500 hover:text-slate-800"
          >
            ——×——
          </button>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-3">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-400/70 px-3 py-1 text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.28em] text-slate-700 bg-white/50"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm uppercase tracking-[0.28em] text-slate-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="relative pb-1 hover:text-black"
              >
                <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-slate-500/80" />
                GitHub
              </a>
            )}
            {project.github && project.demo && (
              <span className="asterisk text-sm">✳</span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="relative pb-1 hover:text-black"
              >
                <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-slate-500/80" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3">
        <p className="font-old-english text-xs tracking-[0.4em] text-slate-500 flex items-center gap-3">
          <span className="asterisk">✳</span>
          <span>PROJECTS</span>
          <span className="asterisk">✳</span>
        </p>
        <p className="max-w-xl text-xs md:text-sm text-slate-600">
          A small selection of builds. Click a card to expand and read more —
          architecture notes, constraints, and tradeoffs go here.
        </p>
      </div>

      <ProjectStack onOpen={setSelected} />

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

