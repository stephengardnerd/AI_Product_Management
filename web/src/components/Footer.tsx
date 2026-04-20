export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold">Stephen D. Gardner</p>
          <p className="text-sm text-slate-400">
            AI Product Founder · Federal Data Science Leader · U.S. Navy Veteran
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a className="text-slate-300 hover:text-accent transition-colors" href="https://github.com/stephengardnerd">
            GitHub
          </a>
          <a className="text-slate-300 hover:text-accent transition-colors" href="https://www.linkedin.com/in/stephengardnerd">
            LinkedIn
          </a>
          <a className="text-slate-300 hover:text-accent transition-colors" href="https://explanova.ai">
            explanova.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
