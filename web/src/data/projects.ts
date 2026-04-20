export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  href: string;
  tags: string[];
  accentColor: string;
};

export const projects: Project[] = [
  {
    slug: "medical-image-annotation",
    category: "Capstone",
    title: "Medical Image Annotation",
    summary:
      "A multi-class classifier evaluation framework with per-class precision/recall, ROC/AUC, and threshold sensitivity — built to translate raw metrics into clinical viability decisions.",
    href: "https://github.com/stephengardnerd/AI_Product_Management/tree/main/Medical%20Image%20Annotation%20Project",
    tags: ["Evaluation", "Clinical", "sklearn"],
    accentColor: "#6f42c1",
  },
  {
    slug: "build-vs-buy",
    category: "Strategy",
    title: "Build vs. Buy Economics",
    summary:
      "Parameterized 24-month TCO model comparing self-hosted open-source against SaaS APIs, with break-even analysis and sensitivity tables for the assumptions that actually move the decision.",
    href: "https://github.com/stephengardnerd/AI_Product_Management/blob/main/notebooks/02_build_vs_buy_economic_model.ipynb",
    tags: ["TCO", "Sensitivity", "Decision model"],
    accentColor: "#2ea043",
  },
  {
    slug: "bias-fairness",
    category: "Ethics",
    title: "Bias & Fairness Audit",
    summary:
      "Demographic parity and equalized odds on a tabular classifier, with a from-scratch reweighting mitigation that surfaces the fairness/accuracy tradeoff a PM has to price.",
    href: "https://github.com/stephengardnerd/AI_Product_Management/blob/main/notebooks/03_bias_fairness_audit.ipynb",
    tags: ["Fairness", "Mitigation", "UCI Adult"],
    accentColor: "#bf3989",
  },
  {
    slug: "data-labeling",
    category: "MLOps",
    title: "Data Labeling & Orchestration",
    summary:
      "Scaleable labeling pipelines that merge synthetic feedback with human-in-the-loop annotation — the operations layer that keeps model quality from drifting in production.",
    href: "https://github.com/stephengardnerd/AI_Product_Management",
    tags: ["HITL", "Synthetic data", "MLOps"],
    accentColor: "#1f6feb",
  },
  {
    slug: "strategic-roadmap",
    category: "Delivery",
    title: "Strategic Roadmap",
    summary:
      "MVP scoping, phased delivery, and cross-functional sequencing that ties engineering velocity to measurable business outcomes across UX, marketing, and ops.",
    href: "https://github.com/stephengardnerd/AI_Product_Management",
    tags: ["MVP", "Roadmap", "Cross-functional"],
    accentColor: "#8250df",
  },
  {
    slug: "applied",
    category: "In production",
    title: "Applied at explanova.ai",
    summary:
      "These frameworks, compressed into a live consumer AI product: a K–12 S.T.E.M. homework copilot with GraphRAG grounding, Gemini 3 Pro + Claude failover, and 78/78 UX validation tests passing.",
    href: "https://github.com/stephengardnerd/explanova-ai-product-case-study",
    tags: ["Live product", "GraphRAG", "GenAI"],
    accentColor: "#bf3989",
  },
];
