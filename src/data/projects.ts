export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  why: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  repo: string;
  language: "Python" | "TypeScript" | "Bun";
  status: "shipped" | "in-progress";
  date: string;
};

export const projects: Project[] = [
  {
    slug: "agentcost",
    name: "agentcost",
    tagline: "Per-task budget, circuit breaker, and cost-of-pass for AI agent workflows.",
    problem:
      "79% of enterprises overran their AI agent budgets in the past year; real runaways cost $10K–$100K per incident. The existing tools cover observability (Langfuse, AgentOps) or single-vendor routing (Portkey, Helicone). None gives a unified per-task budget with fail-closed circuit breakers and a cost-of-pass metric.",
    solution:
      "A tiny Python service that wraps any LLM call. Pre-flight budget check, post-flight check, max-steps loop cap, SQLite ledger (Postgres-portable), and a cost-of-pass metric that computes total_spend / pass_rate. FastAPI dashboard. Synthetic provider for offline tests; real Vertex Gemini integration verified end-to-end (6 real calls, $0.0000629, all ok).",
    why:
      "Existing tools let you observe a runaway. agentcost stops it. The cost-of-pass metric answers the only question that matters: is this agent's work worth its spend?",
    stack: ["Python 3.9+", "httpx", "FastAPI", "SQLite", "Vertex Gemini"],
    metrics: [
      { label: "tests", value: "13/13 passing" },
      { label: "real LLM calls verified", value: "6" },
      { label: "real spend verified", value: "$0.0000629" },
      { label: "runtime dependencies", value: "5" },
    ],
    repo: "https://github.com/obaijahjah/agentcost",
    language: "Python",
    status: "shipped",
    date: "2026-10-08",
  },
  {
    slug: "shopaudit",
    name: "shopaudit",
    tagline:
      "Local CLI that audits a Shopify app stack across 4 cost layers and produces a ranked removal plan.",
    problem:
      "Shopify Plus brands running 15-30 paid apps have $12K-$43K/yr app spend, 20-30% redundant, and the visible monthly cost is roughly half the actual cost (Eightx 2026-07-07). Existing audit tools (AppAudit, Watchdog, Letsmetrix) cover only layer 1: subscription overlap. None quantifies the other three hidden cost layers.",
    solution:
      "A local CLI that reads a JSON snapshot of a store and produces a four-layer cost report: subscription, API/asset weight, usage fees, and data-fragmentation + vendor risk. Detects category overlap across 14 problem buckets. Confidence labels: safe_to_remove / review_first / keep. Output is a markdown + JSON report. Works after the Shopify script-tag deprecation (Oct 2026 → Mar 2027) because webhook and theme-asset weight remain.",
    why:
      "Every Shopify Plus brand running 15+ apps eventually asks 'which of these can I remove?' Existing tools answer the first half. shopaudit answers the second half too — the risk layer.",
    stack: ["Python 3.9+", "zero runtime deps (stdlib only)"],
    metrics: [
      { label: "tests", value: "13/13 passing" },
      { label: "cost layers audited", value: "4" },
      { label: "problem buckets", value: "14" },
      { label: "runtime dependencies", value: "0" },
    ],
    repo: "https://github.com/obaijahjah/shopaudit",
    language: "Python",
    status: "shipped",
    date: "2026-10-08",
  },
];
