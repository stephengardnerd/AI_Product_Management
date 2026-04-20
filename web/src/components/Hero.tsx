export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-3 h-3 rounded-full bg-success animate-pulse" />
          <p className="text-xs font-semibold tracking-[0.25em] text-success uppercase">
            Duke AI Product Management · Portfolio
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-balance">
          AI Product Management,
          <br />
          <span className="bg-gradient-to-r from-accent via-signal to-success bg-clip-text text-transparent">
            shipped like a production system.
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl text-balance">
          Frameworks, evaluations, and decision models from the Duke AI PM program — paired
          with runnable Jupyter notebooks so the methodology isn't just claimed, it's code.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/stephengardnerd/AI_Product_Management"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors"
          >
            View repository
          </a>
          <a
            href="https://explanova.ai"
            className="inline-flex items-center gap-2 rounded-lg bg-success hover:bg-success/90 px-4 py-2 text-sm font-semibold text-white transition-colors"
          >
            See it applied — explanova.ai
          </a>
        </div>
      </div>
    </header>
  );
}
