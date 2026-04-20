import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-16">
        <section>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-3">
            Portfolio Areas
          </h2>
          <p className="text-slate-300 max-w-3xl text-balance mb-10">
            Five workstreams from the Duke AI Product Management program, each paired with
            runnable Jupyter notebooks where the methodology is code, not just claims.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-3">
            Runnable Notebooks
          </h2>
          <p className="text-slate-300 max-w-3xl text-balance mb-6">
            Three notebooks demonstrate the evaluation, economic, and fairness frameworks
            behind the portfolio. Public or synthetic datasets only — no proprietary data.
          </p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-slate-200">
              <li>
                <a
                  className="font-semibold text-signal hover:text-accent transition-colors"
                  href="https://github.com/stephengardnerd/AI_Product_Management/blob/main/notebooks/01_medical_image_annotation_evaluation.ipynb"
                >
                  01 — Medical Image Annotation Evaluation
                </a>
                <span className="text-slate-400"> · per-class P/R/F1, confusion matrix, ROC, threshold sweep.</span>
              </li>
              <li>
                <a
                  className="font-semibold text-signal hover:text-accent transition-colors"
                  href="https://github.com/stephengardnerd/AI_Product_Management/blob/main/notebooks/02_build_vs_buy_economic_model.ipynb"
                >
                  02 — Build vs. Buy Economic Model
                </a>
                <span className="text-slate-400"> · 24-month TCO, break-even curve, sensitivity analysis.</span>
              </li>
              <li>
                <a
                  className="font-semibold text-signal hover:text-accent transition-colors"
                  href="https://github.com/stephengardnerd/AI_Product_Management/blob/main/notebooks/03_bias_fairness_audit.ipynb"
                >
                  03 — Bias & Fairness Audit
                </a>
                <span className="text-slate-400"> · demographic parity, equalized odds, reweighting mitigation.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
