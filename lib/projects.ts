export interface TechStackGroup {
  label: string;
  items: string[];
}

export interface ProjectAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface ProjectFlavor {
  accent: string;
  heroMotif: string;
  animationSpeed: number;
  bodyOpacity?: number;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  statusColor: "stone" | "ember";
  metaDescription: string;
  problem: string;
  build: string;
  differentiator: string;
  techStack: TechStackGroup[];
  techTagsPreview: string[];
  actions: ProjectAction[];
  flavor: ProjectFlavor;
}

export const projects: Project[] = [
  {
    slug: "expert-council",
    name: "Expert Council",
    tagline: "Many viewpoints collapsing into clarity.",
    status: "Beta — functional, not publicly launched",
    statusColor: "stone",
    metaDescription:
      "Expert Council assembles a panel of AI personas to debate your question in real-time, preserving disagreement and trade-offs instead of flattening them into a single answer.",
    problem:
      "Most AI chat is one voice giving you one perspective. Real decisions benefit from structured disagreement. When you're facing a hard choice — career move, architecture decision, strategy call — you don't want one opinion. You want a room full of smart people who see it differently, argue about it, and help you find what you actually think.",
    build:
      "A Research Agent searches the web, then selects 2–4 relevant experts from a roster of 9 distinct personas (Stoic Philosopher, Decision Helper, Creative Thought Partner, Time Traveler Analyst, and more). The experts discuss the topic in real-time through WebSocket-powered chat. Three discussion modes: Cooperative (experts build on each other), Debate (experts argue and defend positions), and Devil's Advocate (experts challenge your thinking). Each expert can search the web mid-discussion, and users can see their extended thinking — the actual reasoning, not just polished output.",
    differentiator:
      "The experts aren't the same AI with different labels. A behavioral testing rubric with 36-case evaluations ensures a Stoic Philosopher and a Decision Helper actually give meaningfully different advice — not the same answer reworded. The system was built for thinking quality, not chat speed.",
    techStack: [
      { label: "Languages", items: ["Python", "JavaScript"] },
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["FastAPI", "WebSocket"] },
      { label: "AI", items: ["Claude", "Anthropic API"] },
      { label: "Search", items: ["Tavily API"] },
      { label: "Infrastructure", items: ["Caddy (reverse proxy)"] },
    ],
    techTagsPreview: ["Claude", "FastAPI", "WebSocket"],
    actions: [
      {
        label: "Try Demo",
        href: "https://expert-council-1078459944567.us-central1.run.app",
        variant: "primary",
      },
    ],
    flavor: {
      accent: "#5B8DEF",
      heroMotif: "bubbles",
      animationSpeed: 1,
    },
  },
  {
    slug: "demo-gauntlet",
    name: "Demo Gauntlet",
    tagline:
      "I built this to stress-test my own AI tools before demos. It runs a structured evaluation suite against any AI app — response quality, edge case handling, hallucination signals. I use it before every OutSystems SA engagement where I'm showing AI tooling.",
    status: "Prototype",
    statusColor: "stone",
    metaDescription:
      "Demo Gauntlet is an AI-powered demo practice simulator where challenger personas fire realistic objections, technical deep-dives, and budget challenges at solution consultants.",
    problem:
      "Every solution consultant practices demos in their head or with colleagues who go easy on them. The real test is the CFO who interrupts with 'what's the ROI?' or the Security Lead who asks about SOC 2 compliance mid-flow. You can't prepare for curveball questions by rehearsing alone. But you also can't assemble a panel of tough stakeholders every time you need to practice.",
    build:
      "Load your product context, pick a challenger persona (CTO, CFO, CMO, Security Lead, Skeptical End User), and run through your demo while the AI fires realistic objections, technical deep-dives, and budget challenges. Each persona has a distinct personality and concern profile. The CTO pushes on architecture and scalability. The CFO wants ROI math. The Security Lead asks about compliance and data handling. After the session, you get a scorecard covering objection handling, technical depth, clarity, and time management.",
    differentiator:
      "Built by someone who's been a solution consultant for 8+ years. The personas aren't generic — they're modeled on the actual stakeholders who show up in enterprise sales cycles. The hardest part of the job isn't knowing your product. It's handling the curveball questions in real-time. Demo Gauntlet doesn't go easy on you.",
    techStack: [
      { label: "Languages", items: ["Python", "JavaScript"] },
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["FastAPI"] },
      { label: "AI", items: ["OpenAI API", "LangChain"] },
      { label: "Knowledge", items: ["ChromaDB (product context retrieval)"] },
      { label: "Infrastructure", items: ["Background jobs for session analysis"] },
    ],
    techTagsPreview: ["OpenAI", "FastAPI", "LangChain"],
    actions: [
      {
        label: "Try it →",
        href: "https://demo-gauntlet-ui.vercel.app",
        variant: "primary",
      },
      { label: "GitHub", href: "https://github.com/rjspence3/demo-gauntlet", variant: "secondary" },
    ],
    flavor: {
      accent: "#D97B2B",
      heroMotif: "spotlight",
      animationSpeed: 1,
    },
  },
  {
    slug: "kernel",
    name: "Kernel",
    tagline:
      "My personal AI operating system — running on my Mac, live in my Slack, in daily use for the past four months. It spawns workers, files research to Obsidian, reads my calendar and email, and surfaces what matters. Not a prototype. Not a concept. This one I actually depend on.",
    status: "In active daily use (single-user)",
    statusColor: "ember",
    metaDescription:
      "Kernel is an AI orchestration system that lives in Slack, spawning autonomous Claude Code workers and maintaining operational memory across days and weeks.",
    problem:
      "AI tools are great at individual tasks but terrible at continuity. You can ask Claude to write code, but it doesn't know about the plan you made yesterday, the bug you filed this morning, or the three things you need to ship by Friday. Work happens across Slack, terminals, files, and your head. Nothing ties it together.",
    build:
      "Built with Claude, Python, and a tmux-based worker architecture I designed from scratch. Kernel is an AI orchestration system that lives in Slack. You talk to it naturally — 'start a new worker for the auth refactor,' 'what's the status on the brand pipeline,' 'log this idea for later.' It spawns Claude Code workers for builds, tracks multi-step plans with progress and backlog items, manages daily captures and weekly reviews, and writes everything to a structured vault (Obsidian) for permanent memory. Workers run unattended. Plans persist across sessions. The system knows what you're building and where you left off.",
    differentiator:
      "It's not a chatbot wrapper. It's infrastructure. Kernel spawns autonomous workers, manages their lifecycle, tracks costs, logs decisions, and maintains operational memory across days and weeks. The security model handles unattended agent execution — not just 'I'm at the keyboard' assumptions. It's the difference between a tool and a system.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "Interface", items: ["Slack API (Bot)"] },
      {
        label: "AI",
        items: ["Claude", "Anthropic API", "Claude Code (spawned workers)"],
      },
      {
        label: "Storage",
        items: ["SQLite (plans.db)", "JSONL (logs)", "Obsidian Vault (knowledge)"],
      },
      { label: "Infrastructure", items: ["Local Mac", "Background processes"] },
    ],
    techTagsPreview: ["Claude Code", "Slack", "SQLite"],
    actions: [],
    flavor: {
      accent: "#E8553A",
      heroMotif: "terminal",
      animationSpeed: 1,
    },
  },
  {
    slug: "napgpt",
    name: "napGPT",
    tagline: "The laziest AI ever built. On purpose.",
    status: "Complete — if it has to be",
    statusColor: "stone",
    metaDescription:
      "napGPT is an intentionally lazy AI chatbot — a prompt engineering showcase demonstrating personality engineering and behavioral range without fine-tuning.",
    problem:
      "Every AI product is competing to be the most helpful, most capable, most eager. They all sound the same: enthusiastic, thorough, desperate to please. What if an AI had personality instead of just performance? What if it could be reluctant, sleepy, and only helpful when you really pushed for it?",
    build:
      "napGPT is an intentionally lazy AI chatbot with an effort slider. Crank it down and you get one-word answers, yawns, and gentle refusals to think. Crank it up and it performs like a normal assistant, but reluctantly. The UI is cozy-themed with nap mechanics — the AI can fall asleep mid-conversation if you bore it, and you have to wake it up. Adjustable personality levels affect response length, vocabulary complexity, and willingness to engage. 38 tests across Playwright and Jest.",
    differentiator:
      "It's the AI equivalent of that friend who gives you honest advice but only if you really push for it. It's a conversation starter, a portfolio piece, and proof that AI products can have personality beyond 'enthusiastic assistant.' Also: it has 38 tests. The lazy AI has better test coverage than most serious apps.",
    techStack: [
      { label: "Languages", items: ["TypeScript"] },
      { label: "Frontend", items: ["React", "Next.js"] },
      { label: "AI", items: ["OpenAI API"] },
      { label: "Testing", items: ["Playwright", "Jest (38 tests)"] },
      { label: "Infrastructure", items: ["Vercel"] },
    ],
    techTagsPreview: ["Next.js", "OpenAI", "38 tests"],
    actions: [
      { label: "Try It", href: "https://napgpt.vercel.app", variant: "primary" },
      { label: "GitHub", href: "https://github.com/rjspence3/napGPT", variant: "secondary" },
    ],
    flavor: {
      accent: "#8B7EC8",
      heroMotif: "zzz",
      animationSpeed: 1.5,
      bodyOpacity: 0.85,
    },
  },
  {
    slug: "lawn-estimator",
    name: "Lawn Estimator",
    tagline: "Satellite imagery + ML segmentation = instant lawn care quotes from space.",
    status: "Prototype — went through 9-phase architecture refactor",
    statusColor: "stone",
    metaDescription:
      "Lawn Estimator uses satellite imagery and ML segmentation to generate instant landscaping price quotes from any address — no in-person estimate needed.",
    problem:
      "The lawn care industry is a $130B market where the sales process hasn't changed in decades. A homeowner wants a quote. They schedule an in-person visit. A landscaper drives to the property, walks around with a measuring wheel, drives home, and emails a number. Half those visits don't convert. The homeowner waited three days for a number they could have gotten in seconds — because the data to calculate it is literally photographed from space every few weeks.",
    build:
      "Enter an address. The system pulls satellite imagery, runs SegFormer ML semantic segmentation to identify grass vs. hardscape vs. structures, calculates treatable area in square feet, and produces an instant cost estimate. The pipeline: address → geocoding → satellite tile fetch → ML inference → area calculation → pricing. Designed to be embedded as a 'get instant quote' widget on any landscaping company's website.",
    differentiator:
      "It eliminates the biggest friction point in landscaping sales: the in-person estimate. The project went through a 9-phase refactor to get the architecture right — clean service layer, proper rate limiting, separation of ML inference from business logic. It's not a demo. It's an embeddable product pipeline.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "Backend", items: ["FastAPI (with rate limiting)"] },
      {
        label: "ML",
        items: ["SegFormer (fine-tuned on aerial imagery)", "Semantic segmentation"],
      },
      { label: "AI", items: ["Computer vision pipeline"] },
      { label: "Infrastructure", items: ["Google Cloud", "Clean service layer"] },
      { label: "Architecture", items: ["9-phase refactor"] },
    ],
    techTagsPreview: ["SegFormer", "FastAPI", "Google Cloud"],
    actions: [
      {
        label: "Try Demo",
        href: "https://lawn.nomouthlabs.com",
        variant: "primary",
      },
    ],
    flavor: {
      accent: "#4A9E6B",
      heroMotif: "grid",
      animationSpeed: 1,
    },
  },
  {
    slug: "excel-risk-check",
    name: "Excel Risk Check",
    tagline: "API-first spreadsheet analysis. The most shipped product in the catalog.",
    status: "Functional — the most 'launched' project",
    statusColor: "ember",
    metaDescription:
      "Excel Risk Check is an API-first spreadsheet analysis tool that evaluates structural health — circular references, formula complexity, hidden risks — before they break in production.",
    problem:
      "Enterprise teams live in Excel. They make decisions on spreadsheets that have circular references, broken formulas, phantom dependencies, and structural risks that nobody notices until something breaks in production. Auditing a complex workbook manually is tedious, error-prone, and usually doesn't happen until after the damage is done.",
    build:
      "Upload a spreadsheet. The API analyzes it for structural risks: circular references, volatile functions, external dependencies, formula complexity, hidden sheets, data validation gaps, and more. Returns a risk assessment with severity levels, specific cell references, and remediation suggestions. Designed as an API-first service that can be integrated into workflows, CI/CD pipelines, or used standalone.",
    differentiator:
      "It's not a linter — it's a risk assessor. It doesn't just find errors, it evaluates the structural health of a workbook and tells you what's going to break before it breaks. API-first means it plugs into existing workflows rather than requiring users to learn a new tool. And it actually works — this is the most shipped, most complete project in the catalog.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "Backend", items: ["API-first architecture"] },
      {
        label: "Analysis",
        items: ["Custom rule engine for spreadsheet risk patterns"],
      },
      {
        label: "AI",
        items: ["Claude", "Anthropic API (natural language risk summaries)"],
      },
      { label: "Infrastructure", items: ["Cloud deployment"] },
    ],
    techTagsPreview: ["Python", "Claude", "API-first"],
    actions: [
      {
        label: "Try It",
        href: "https://excelriskcheck.com/",
        variant: "primary",
      },
      {
        label: "API Docs",
        href: "https://rapidapi.com/excelriskcheck/api/excel-risk-check",
        variant: "secondary",
      },
    ],
    flavor: {
      accent: "#E8553A",
      heroMotif: "spreadsheet",
      animationSpeed: 1,
    },
  },
  {
    slug: "job-heist",
    name: "AI Job Heist",
    tagline:
      "An AI heist planner cases your job and delivers the personalized takeover blueprint.",
    status: "Live — deployed on Vercel",
    statusColor: "ember",
    metaDescription:
      "AI Job Heist is a deadpan AI heist planner that interviews you about your job and delivers a personalized blueprint for exactly how AI would take it over.",
    problem:
      "Every AI jobs report says the same thing: abstract percentages, broad job categories, nothing personal. You've heard 'AI will replace 40% of jobs' but never which 40% of your job specifically. The stats are designed to be alarming in aggregate and meaningless at the individual level.",
    build:
      "An AI plays a deadpan heist planner casing a job before the big score. It interviews you with 5–7 questions about your actual tasks, tools, time allocation, and decision types — then generates a four-section Heist Plan: Target Profile (your role as an intelligence dossier), Heist Plan (step-by-step AI takeover using your specific tasks), Threat Level (percentage breakdown by task category with a deterministic rubric), and What AI Can't Steal (the genuinely human elements). A Serious Mode toggle reframes the exact same data constructively — heist steps become opportunities, threat level becomes leverage score.",
    differentiator:
      "Comedy is the Trojan horse for a real AI opportunity audit. Users who would never fill out a serious 'AI readiness assessment' will do this for fun — and walk away with an honest picture of their AI exposure. The threat level scoring uses a deterministic rubric rather than LLM-improvised percentages. Same data, two framings: one for the dark laugh, one for the action plan.",
    techStack: [
      { label: "Languages", items: ["TypeScript"] },
      { label: "Frontend", items: ["React", "Next.js"] },
      { label: "AI", items: ["Claude", "Anthropic API"] },
      { label: "Styling", items: ["Tailwind CSS"] },
      { label: "Infrastructure", items: ["Vercel"] },
    ],
    techTagsPreview: ["Next.js", "Claude", "Vercel"],
    actions: [
      {
        label: "Try It",
        href: "https://jobheist.vercel.app",
        variant: "primary",
      },
      { label: "GitHub", href: "https://github.com/rjspence3/job-heist", variant: "secondary" },
    ],
    flavor: {
      accent: "#E8553A",
      heroMotif: "spreadsheet",
      animationSpeed: 1,
    },
  },
  {
    slug: "dspy-api",
    name: "The Arbitrage Factory",
    tagline:
      "Upload a schema, optimize it with DSPy/MIPROv2, deploy as a REST API — 10–30x cheaper than raw GPT-4o.",
    status: "Live — deployed on GCP",
    statusColor: "ember",
    metaDescription:
      "The Arbitrage Factory is a serverless platform that optimizes AI agents using DSPy's MIPROv2 — finding better prompts for cheaper models so you don't have to pay GPT-4o prices for production traffic.",
    problem:
      "Running AI in production at GPT-4o prices is expensive at scale. The insight most teams miss: GPT-4o-level quality is often achievable with a much cheaper model — if you optimize the prompts. DSPy's MIPROv2 does exactly that, but setting it up from scratch requires expertise in prompt optimization pipelines, synthetic data generation, evaluation harnesses, and deployment infrastructure.",
    build:
      "Define your input/output schema in a UI. The platform generates synthetic training examples with GPT-4o, runs MIPROv2 optimization to find the best prompts for a cheaper student model (gpt-4o-mini), and produces a Regatta Report comparing cost and accuracy between baseline and optimized agents. The optimized agent deploys immediately as a REST endpoint with API key auth. Async job execution runs on Cloud Tasks with stuck-job recovery; compiled programs persist in GCS.",
    differentiator:
      "Most prompt optimization tools are research prototypes. The Arbitrage Factory is a production pipeline: schema builder, synthetic data generation, MIPROv2 optimization, cost/accuracy reporting, and REST deployment — all connected. The output is a live API, not a notebook. 146 tests passing.",
    techStack: [
      { label: "Languages", items: ["Python", "TypeScript"] },
      { label: "Frontend", items: ["Next.js", "Clerk (auth)"] },
      { label: "Backend", items: ["FastAPI", "DSPy (MIPROv2)"] },
      { label: "AI", items: ["OpenAI API (GPT-4o, gpt-4o-mini)"] },
      {
        label: "Infrastructure",
        items: ["GCP Cloud Run", "Firestore", "Cloud Tasks", "GCS"],
      },
    ],
    techTagsPreview: ["DSPy", "FastAPI", "GCP"],
    actions: [],
    flavor: {
      accent: "#2A7DE1",
      heroMotif: "grid",
      animationSpeed: 1,
    },
  },
  {
    slug: "aequity",
    name: "aEquity",
    tagline:
      "Autonomous equity analyst. S&P 500 stocks scored across four guru-driven lenses — business quality, competitive moat, financial health, and governance — using SEC 10-K filings, yfinance metrics, and Claude.",
    status: "Live",
    statusColor: "ember",
    metaDescription:
      "aEquity is an autonomous equity analyst that combines quantitative financial metrics, SEC filing analysis, and Claude LLM scoring to produce a 0–100 scorecard for S&P 500 companies.",
    problem:
      "Retail investors and analysts spend hours reading 10-Ks, running ratios, and cross-referencing qualitative signals before they can form a view on a stock. Most tools give you raw data. None of them reason through it. aEquity does the analysis the way a serious investor would — across multiple frameworks, simultaneously.",
    build:
      "Pulls quantitative metrics via yfinance, downloads and parses SEC EDGAR 10-K filings, and runs Claude across four analytical pillars: business quality, competitive moat, financial health, and governance. Each pillar scores 0–100. The final scorecard shows where a company is strong, where it's weak, and why. Runs as a CLI for single stocks, a Streamlit dashboard for screening, or a batch runner to populate a SQLite database of scored companies.",
    differentiator:
      "Four separate analytical lenses, not one score. The moat analysis reads the actual 10-K for competitive positioning signals — not just P/E ratios. Claude reasons through the qualitative parts. yfinance handles the math. The combination produces the kind of structured opinion a buy-side analyst would write, automated.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "AI", items: ["Claude API"] },
      { label: "Data", items: ["yfinance", "SEC EDGAR"] },
      { label: "Interface", items: ["Streamlit", "CLI"] },
      { label: "Storage", items: ["SQLite"] },
    ],
    techTagsPreview: ["Python", "Claude", "SEC EDGAR"],
    actions: [
      {
        label: "Try It",
        href: "https://aequity-production.up.railway.app",
        variant: "primary",
      },
      { label: "GitHub", href: "https://github.com/rjspence3/aEquity", variant: "secondary" },
    ],
    flavor: {
      accent: "#2D9E6B",
      heroMotif: "grid",
      animationSpeed: 1,
    },
  },
  {
    slug: "agentic-interview",
    name: "Agentic Interview",
    tagline:
      "AI-powered technical interviews with lens-based evaluation and DSPy-optimized scoring. Not a quiz — a structured conversation that reasons about candidates.",
    status: "Beta — deployed privately, not publicly launched",
    statusColor: "stone",
    metaDescription:
      "Agentic Interview is an AI-powered technical interview platform with multi-agent evaluation, configurable analytical lenses, and DSPy-optimized scoring — built for organizations that want structured, traceable hiring decisions.",
    problem:
      "Technical interviews are inconsistent, undocumented, and prone to interviewer bias. The same candidate gets wildly different results from different interviewers because there's no structured evaluation framework — just gut calls and vibes. Organizations lose good candidates and hire bad ones because the process isn't designed to be reliable.",
    build:
      "A multi-agent system where a QuestionsAgent drives the interview, an EvaluatorAgent scores each answer against keypoints, and an OrchestratorAgent manages session state. Two evaluation modes: fast heuristic matching and LLM-powered semantic scoring via OpenAI or Anthropic. A separate lens analysis pipeline applies configurable analytical frameworks to the full interview transcript — not just individual answers — to surface structured insights about candidate patterns. DSPy optimization pre-compiles the evaluator prompts for consistent, cost-efficient scoring at scale. Full audit trail: every transcript, evaluation, and lens result is persisted to PostgreSQL via SQLAlchemy.",
    differentiator:
      "Lens-based analysis is the differentiator. Most AI interview tools grade individual answers. This one applies multiple analytical frameworks to the full conversation — like overlaying different lenses on the same transcript to see what each one reveals. The DSPy-optimized prompts mean the evaluation rubric is genuinely tunable: you can train it on your own scoring preferences, not just use someone else's defaults. Multi-tenant, full audit trail, export to CSV/JSON.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "Frontend", items: ["Streamlit"] },
      { label: "Backend", items: ["SQLAlchemy", "Alembic"] },
      {
        label: "AI",
        items: ["OpenAI API", "Anthropic API", "DSPy (prompt optimization)"],
      },
      { label: "Storage", items: ["PostgreSQL (prod)", "SQLite (dev)"] },
      { label: "Infrastructure", items: ["Railway"] },
    ],
    techTagsPreview: ["DSPy", "Streamlit", "PostgreSQL"],
    actions: [],
    flavor: {
      accent: "#5B6EF5",
      heroMotif: "bubbles",
      animationSpeed: 1,
    },
  },
  {
    slug: "ai-beta-tester",
    name: "AI Beta Tester",
    tagline: "Personality-driven agents that break your app the way real users do.",
    status: "Beta — working, Docker-only",
    statusColor: "stone",
    metaDescription:
      "AI Beta Tester runs personality-driven Claude agents — Speedrunner, Chaos Gremlin, Methodical Newcomer, and more — against any URL via Playwright MCP, generating structured bug reports from behavioral profiles that uniform testing misses.",
    problem:
      "You built it, so you know how it's supposed to work. That's exactly what makes you blind to it. Real users don't follow the happy path — they tab-key through forms in the wrong order, paste URLs into search boxes, click things twice, and abandon flows the moment anything feels off. Standard automated tests verify that the code works. They don't verify that the experience makes sense to someone who isn't you.",
    build:
      "A set of distinct agent personalities — Speedrunner, Chaos Gremlin, Methodical Newcomer, Technical Exploiter, Privacy Paranoid, and more — each with a behavioral profile that shapes how they interact with a target URL via Playwright MCP. Agents run against your app, surface findings by category (UX friction, edge cases, broken flows), and produce structured Markdown reports with reproduction steps. A Next.js dashboard shows live session progress via SSE, session history, and a report browser. The backend runs as a FastAPI service; agents use Claude to reason through what they're seeing and decide what to try next.",
    differentiator:
      "The value isn't automation — it's the behavioral diversity. A Speedrunner skips instructions and rage-clicks. A Methodical Newcomer reads everything and still gets lost. A Chaos Gremlin submits empty forms and pastes emojis into number fields. Each personality catches a different class of bug. Running all of them against the same URL in a single session surfaces the full spectrum of failure modes before a real user finds them first.",
    techStack: [
      { label: "Languages", items: ["Python", "TypeScript"] },
      { label: "Frontend", items: ["Next.js 14", "React"] },
      { label: "Backend", items: ["FastAPI", "SSE (live progress)"] },
      { label: "AI", items: ["Claude", "Anthropic API"] },
      { label: "Testing", items: ["Playwright MCP (browser automation)"] },
      { label: "Infrastructure", items: ["Docker", "Railway"] },
    ],
    techTagsPreview: ["Claude", "Playwright", "FastAPI"],
    actions: [],
    flavor: {
      accent: "#3B7DD8",
      heroMotif: "terminal",
      animationSpeed: 1,
    },
  },
  {
    slug: "context-os",
    name: "ContextOS",
    tagline: "The graph-based memory layer that prevents Groundhog Day in AI.",
    status: "Prototype — v1.2-rc1, active development",
    statusColor: "stone",
    metaDescription:
      "ContextOS is an active memory OS for AI — a FastAPI server backed by a property graph (KuzuDB) and vector store (LanceDB) that extracts entities, facts, and relationships from your AI sessions and injects relevant context into future ones.",
    problem:
      "Every AI session starts from zero. You re-explain your project. You re-introduce your team. You re-describe constraints the AI forgot overnight. Standard RAG retrieves keywords but misses relationships — it doesn't know that Project A is blocking Project B, or that you made a decision three weeks ago that affects the code you're writing today. The context window can't hold six months of history, and even if it could, you wouldn't want to stuff all of it in every prompt.",
    build:
      "ContextOS runs as a background service alongside your AI tools. A Chrome extension monitors Claude.ai and ChatGPT sessions, detects idle time, and ships conversation transcripts to a local FastAPI server. An extraction pipeline (built around OpenAI gpt-4o-mini) pulls out facts, projects, people, decisions, and relationships as typed graph triples — then stores them in KuzuDB (an embedded property graph) and LanceDB (vector embeddings). Four API endpoints do the work: /ingest queues transcripts, /recall runs hybrid graph + vector search, /context returns a curated injection block formatted for a system prompt, and /brief diffs yesterday's graph state against today's for a morning summary.",
    differentiator:
      "ContextOS captures relationships between concepts, not just keyword similarity — which is what lets it answer 'what's blocking Project A?' instead of just 'find things mentioning Project A.' It's fully local: both databases are embedded (no Docker, no cloud), all data stays on your machine, and the server binds to 127.0.0.1. It predates Kernel and is the standalone proof-of-concept for the memory architecture Kernel later extended. Built before persistent AI memory was a mainstream product category.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "Backend", items: ["FastAPI", "Uvicorn"] },
      { label: "Graph DB", items: ["KuzuDB (embedded property graph)"] },
      { label: "Vector DB", items: ["LanceDB (embedded vector store)"] },
      { label: "AI", items: ["OpenAI gpt-4o-mini (extraction)", "OpenAI gpt-4o (synthesis)"] },
      { label: "Extension", items: ["Chrome Extension (Manifest V3)", "Claude.ai + ChatGPT scraping"] },
    ],
    techTagsPreview: ["KuzuDB", "LanceDB", "FastAPI"],
    actions: [],
    flavor: {
      accent: "#7B4FBA",
      heroMotif: "graph",
      animationSpeed: 1,
    },
  },
  {
    slug: "darch",
    name: "dArch",
    tagline:
      "Decision Archaeology: reconstructs what was decided, what was explicitly rejected, and why — from public GitHub PR history.",
    status: "CLI — UI in progress",
    statusColor: "stone",
    metaDescription:
      "dArch is a CLI tool that reconstructs architectural decision timelines from GitHub history, surfacing structural constraints extracted from PRs, reverts, and design discussions across open-source repositories.",
    problem:
      "Every codebase carries invisible load-bearing decisions — things that were tried and reverted, constraints baked in during a single PR discussion, choices that blocked entire design directions for years. None of that is documented. It lives in closed PRs, comments, and commit messages. When a new contributor asks 'why is it like this?', the answer is usually 'no idea' or 'someone did it that way years ago.'",
    build:
      "Run darch against any public GitHub repository. It fetches closed PRs and reverts, uses an LLM to classify each as a decision or anti-decision, extracts the constraint phrase (what future designs are now blocked), and generates a timestamped timeline. Anti-decisions — things explicitly rejected — are the most interesting output: they reveal the design paths the project tried and abandoned. Five repositories analyzed so far: OpenRA, Godot, Luanti, SuperTuxKart, OpenMW. 22 validated structural constraints extracted.",
    differentiator:
      "Most archaeology tools look at what shipped. dArch looks at what was rejected. Anti-decisions are the invisible architecture — the decisions that constrain every design choice afterward but never appear in documentation. Surfacing them makes the implicit load-bearing structure of a codebase legible.",
    techStack: [
      { label: "Languages", items: ["Python"] },
      { label: "CLI", items: ["Typer", "Rich"] },
      { label: "AI", items: ["OpenAI API (extraction)"] },
      { label: "Storage", items: ["SQLite"] },
      { label: "GitHub", items: ["REST API v3"] },
    ],
    techTagsPreview: ["Python", "OpenAI", "SQLite"],
    actions: [
      {
        label: "View Demo",
        href: "/darch",
        variant: "primary",
      },
    ],
    flavor: {
      accent: "#C47D2E",
      heroMotif: "terminal",
      animationSpeed: 1,
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
