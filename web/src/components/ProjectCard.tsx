import type { Project } from "../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.href}
      className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 p-6 transition-all flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ backgroundColor: project.accentColor }}
          aria-hidden
        />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 group-hover:text-accent transition-colors">
          {project.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-slate-300 flex-1 text-balance">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full border border-white/15 text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
