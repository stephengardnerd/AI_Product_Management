# Runnable Notebooks

Three Jupyter notebooks that exercise the frameworks claimed in this portfolio. Public or synthetic datasets only — no proprietary data.

| Notebook | What it demonstrates |
|---|---|
| [`01_medical_image_annotation_evaluation.ipynb`](01_medical_image_annotation_evaluation.ipynb) | Per-class precision/recall/F1, confusion matrix, ROC, precision-recall threshold tradeoff. Framework behind the medical-image-annotation capstone. |
| [`02_build_vs_buy_economic_model.ipynb`](02_build_vs_buy_economic_model.ipynb) | Parameterized 24-month TCO model for self-host vs SaaS API, break-even curve, sensitivity analysis. |
| [`03_bias_fairness_audit.ipynb`](03_bias_fairness_audit.ipynb) | Demographic parity + equalized odds on UCI Adult, with reweighting mitigation and tradeoff visualization. |

## Run

```bash
pip install -r requirements.txt
jupyter notebook
```

All three notebooks run in under a minute on a laptop.
