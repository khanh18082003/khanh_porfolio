import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  FaBullseye,
  FaCircleCheck,
  FaDatabase,
  FaGaugeHigh,
  FaRocket,
  FaSitemap,
  FaTriangleExclamation,
} from "react-icons/fa6";
import Container from "../components/layout/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Badge from "../components/ui/Badge";
import RevealSection from "../components/layout/RevealSection";
import { projects } from "../data/projects";
import Button from "../components/ui/Button";
import { useEffect } from "react";

interface ReportContent {
  problemStatement: string;
  goals: string[];
  architectureDiagramImage: string;
  architectureDiagramAlt: string;
  featureBlocks: Array<{
    title: string;
    items: string[];
  }>;
  workflowDiagrams: Array<{
    usecase: string;
    image: string;
    alt: string;
  }>;
  erdImage: string;
  erdEntities: string[];
  performanceOptimizations: string[];
  deployment: string[];
}

const reportPresets: Record<string, ReportContent> = {
  "1": {
    problemStatement:
      "Managing affiliate commissions manually becomes increasingly difficult as the number of partner accounts grows. Affiliate operators often collaborate with multiple users who manage different Shopee affiliate accounts, and commission earnings are distributed across multiple payout periods. Calculating revenue sharing, tracking commissions for each account, and reconciling payments manually can lead to errors and time-consuming financial operations. A centralized system is needed to manage affiliate accounts, automate commission tracking, calculate revenue sharing between partners and the platform owner, and provide clear payment summaries for each payout cycle.",
    goals: [
      "Provide a centralized platform for managing users and their affiliate accounts under a single operator.",
      "Automate commission tracking by importing Shopee payout data and storing earnings for each affiliate account.",
      "Automatically calculate revenue sharing between the system owner and users based on predefined commission percentages.",
      "Generate clear payment summaries for each payout period so users know the exact amount they need to settle with the owner.",
    ],
    architectureDiagramImage: "/system_architecture.png",
    architectureDiagramAlt: "Mock system architecture diagram",
    featureBlocks: [
      {
        title: "Affiliate Account Management",
        items: [
          "Manage users collaborating with the platform owner",
          "Associate multiple affiliate accounts with each user",
          "Configure revenue sharing percentages for each account ",
        ],
      },
      {
        title: "Commission Tracking",
        items: [
          "Import Shopee payout data from Excel files",
          "Automatically parse and store commission earnings for each account",
          "Track commissions across different payout periods",
        ],
      },
      {
        title: "Revenue Sharing Calculation",
        items: [
          "Automatically calculate the owner's commission share",
          "Compute the remaining payout amount for each user",
          "Aggregate commission data across multiple accounts",
        ],
      },
      {
        title: "Payment Reconciliation",
        items: [
          "Generate payout summaries for each user",
          "Show total commission, owner's share, and payable balance",
          "Help users track and settle payments for each payout cycle",
        ],
      },
    ],
    workflowDiagrams: [
      {
        usecase: "Use Case: User Authentication",
        image: "/Authentication.png",
        alt: "Mock workflow diagram for user authentication",
      },
      {
        usecase: "Use Case: Payment Reconciliation",
        image: "/payment_proccessing.png",
        alt: "Mock workflow diagram for payment reconciliation",
      },
    ],
    erdImage: "/diagram.png",
    erdEntities: [
      "users",
      "accounts",
      "completed_times",
      "payments",
      "account_completed_times",
    ],
    performanceOptimizations: [
      "Redis caching for high-frequency aggregate queries.",
      "Optimized indexes for payout and transaction lookups.",
    ],
    deployment: [
      "Build backend and frontend Docker images.",
      "Deploy to Ubuntu VPS with Docker Compose.",
      "Use Nginx reverse proxy with TLS and health checks.",
    ],
  },
  "2": {
    problemStatement:
      "The volume of Vietnamese news articles is growing quickly, and manual categorization is too slow for editorial workflows.",
    goals: [
      "Reach high classification accuracy on a large multi-label dataset.",
      "Serve predictions quickly through API and mobile clients.",
      "Provide a repeatable training and hyperparameter optimization pipeline.",
    ],
    architectureDiagramImage: "/slide.png",
    architectureDiagramAlt: "Mock system architecture diagram",
    featureBlocks: [
      {
        title: "NLP Pipeline",
        items: [
          "Vietnamese preprocessing and tokenization",
          "TF-IDF and embedding-based feature pipelines",
        ],
      },
      {
        title: "Modeling",
        items: [
          "LinearSVC baseline with PhoBERT fine-tuning",
          "GridSearchCV and Cuckoo Search optimization",
        ],
      },
      {
        title: "Serving",
        items: ["Low-latency prediction API", "Model version management on S3"],
      },
    ],
    workflowDiagrams: [
      {
        usecase: "Use Case: Classify a New Article",
        image: "/slide.png",
        alt: "Mock workflow diagram for article classification",
      },
      {
        usecase: "Use Case: Retrain and Publish a New Model",
        image: "/slide.png",
        alt: "Mock workflow diagram for model retraining and release",
      },
    ],
    erdImage: "/erd-template.svg",
    erdEntities: ["documents", "labels", "predictions", "model_versions"],
    performanceOptimizations: [
      "Request batching to increase prediction throughput.",
      "Model warm-up and tokenizer caching in memory.",
      "Optimized API payload and reduced storage I/O overhead.",
    ],
    deployment: [
      "Package the ML service as an isolated Docker image.",
      "Deploy API behind Nginx with autoscaling policy.",
      "Sync model artifacts to versioned AWS S3 storage.",
    ],
  },
  "3": {
    problemStatement:
      "Online classrooms need real-time quiz interactions while still remaining stable under high concurrent submission loads.",
    goals: [
      "Support real-time quizzes for large classroom sessions.",
      "Provide centralized management for classes, quizzes, and results.",
      "Track learning progress and live leaderboard updates.",
    ],
    architectureDiagramImage: "/slide.png",
    architectureDiagramAlt: "Mock system architecture diagram",
    featureBlocks: [
      {
        title: "Classroom Management",
        items: [
          "Class, student roster, and schedule management",
          "Clear teacher and student role permissions",
        ],
      },
      {
        title: "Realtime Quiz",
        items: [
          "Near real-time submission and scoring",
          "Multi-device quiz state synchronization",
        ],
      },
      {
        title: "Learning Analytics",
        items: [
          "Topic-based progress analytics",
          "Leaderboard and historical result tracking",
        ],
      },
    ],
    workflowDiagrams: [
      {
        usecase: "Use Case: Student Joins a Live Quiz",
        image: "/slide.png",
        alt: "Mock workflow diagram for live quiz participation",
      },
      {
        usecase: "Use Case: Teacher Publishes Quiz Results",
        image: "/slide.png",
        alt: "Mock workflow diagram for publishing quiz results",
      },
    ],
    erdImage: "/erd-template.svg",
    erdEntities: ["classrooms", "quizzes", "quiz_attempts", "leaderboards"],
    performanceOptimizations: [
      "Redis sorted sets for fast leaderboard updates.",
      "Kafka event streaming to reduce synchronous service coupling.",
      "Horizontal scaling for WebSocket gateways during peak traffic.",
    ],
    deployment: [
      "Containerized services deployed by module.",
      "Gateway exposed through reverse proxy with TLS.",
      "Centralized logging and monitoring for throughput and errors.",
    ],
  },
};

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-6xl font-black text-emerald-600">404</p>
            <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Project not found
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <FaArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const fallbackImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAHNfBU0X0PyUm4cJP9TXdejBZn0QQgenqSlOKsyNyrVvoJ8vJfu0xPpUdTf0eI0zyd71Hv7e7twCnvYYIRiVeaWgX4KE_xt7QUNmHfxiTq8X9pnsAg8StuCgAU8nF2jh9wL42dhleDFal5J28IAgvhhzMDx8e8TVl9qISZQx3ltBn-3riGpXpeYPIWEnfYv2gxPQuea5l_bWyXRQqln61SG8hKiW_xeQMmYP_IUO4imRZfBIPQ5301b5jxAOf-Ih5q5SX9eMDMLdSh";

  const reportContent = reportPresets[project.id] ?? {
    problemStatement:
      "This project was built to solve real operational bottlenecks, reduce manual workload, and improve the end-user experience.",
    goals: [
      "Define and solve the core business problem clearly.",
      "Build a stable and scalable system architecture.",
      "Optimize performance and operational reliability.",
    ],
    architectureDiagramImage: "/slide.png",
    architectureDiagramAlt: "Mock system architecture diagram",
    featureBlocks: [
      {
        title: "Core Module",
        items: project.features?.slice(0, 2) ?? ["Main business features"],
      },
      {
        title: "Workflow Module",
        items: project.features?.slice(2, 4) ?? ["Operational workflows"],
      },
      {
        title: "Reporting Module",
        items: project.features?.slice(4, 6) ?? ["Analytics and reporting"],
      },
    ],
    workflowDiagrams: [
      {
        usecase: "Use Case: Main Business Flow",
        image: "/slide.png",
        alt: "Mock workflow diagram for main business flow",
      },
    ],
    erdImage: "/erd-template.svg",
    erdEntities: ["users", "projects", "events"],
    performanceOptimizations: [
      "Reduce repeated and unnecessary data queries.",
      "Optimize heavy background processing tasks.",
    ],
    deployment: [
      "Package the application with containers.",
      "Deploy production behind a secure reverse proxy.",
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="relative h-[26rem] w-full overflow-hidden sm:h-[30rem] lg:h-[34rem]">
          <img
            src={project.image === "" ? fallbackImage : project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/60 to-slate-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.2),transparent_40%)]" />

          <div className="absolute left-4 top-4 sm:left-8 sm:top-6">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Back to projects"
            >
              <FaArrowLeft size={13} />
              Back
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <Container>
              <div className="grid gap-5 lg:grid-cols-3 lg:items-end">
                <div className="lg:col-span-2">
                  <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200 backdrop-blur-sm">
                    Project Report
                  </p>
                  <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl [text-shadow:0_0_4px_#000,0_0_4px_#000,0_0_8px_rgba(0,0,0,0.8)]">
                    {project.title}
                  </h1>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
                    {project.overview ?? project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="w-full gap-2 border-white/25 bg-white/15 text-white hover:border-emerald-300 hover:bg-white/20"
                  >
                    <FaGithub size={16} />
                    Github Repository
                  </Button>
                  {project.demoUrl !== "#work" && (
                    <Button
                      as="a"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="w-full gap-2"
                    >
                      <FaExternalLinkAlt size={14} />
                      {project.demoLabel ?? "Live Demo"}
                    </Button>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>

        <Container>
          <div className="py-10 lg:py-14">
            <RevealSection>
              <div className="space-y-10">
                {project.highlights && project.highlights.length > 0 && (
                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Report Snapshot
                    </h2>
                    <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {project.highlights.map((h) => (
                        <div
                          key={h.label}
                          className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-700/40"
                        >
                          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            {h.label}
                          </dt>
                          <dd className="mt-0.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                            {h.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                )}

                <section aria-labelledby="overview-heading">
                  <h2
                    id="overview-heading"
                    className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <span
                      className="h-5 w-1 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    Project Overview
                  </h2>
                  <p className="rounded-xl border border-slate-200 bg-white p-5 leading-relaxed text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {project.overview ?? project.description}
                  </p>
                </section>

                <section aria-labelledby="problem-statement-heading">
                  <h2
                    id="problem-statement-heading"
                    className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaTriangleExclamation
                      size={18}
                      className="text-amber-500"
                    />
                    Problem Statement
                  </h2>
                  <p className="rounded-xl border border-amber-200 bg-amber-50 p-5 leading-relaxed text-amber-950 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-100">
                    {reportContent.problemStatement}
                  </p>
                </section>

                <section aria-labelledby="goals-heading">
                  <h2
                    id="goals-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaBullseye size={18} className="text-emerald-500" />
                    Project Goals
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {reportContent.goals.map((goal, index) => (
                      <li
                        key={goal}
                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                          Goal {index + 1}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                          {goal}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="architecture-heading">
                  <h2
                    id="architecture-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaSitemap size={18} className="text-cyan-500" />
                    System Architecture
                  </h2>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                      Replace this placeholder image with your final system
                      architecture diagram.
                    </p>
                    <img
                      src={reportContent.architectureDiagramImage}
                      alt={reportContent.architectureDiagramAlt}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700"
                      loading="lazy"
                    />
                  </div>
                </section>

                <section aria-labelledby="features-heading">
                  <h2
                    id="features-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <span
                      className="h-5 w-1 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    Key Features
                  </h2>
                  <div className="grid gap-4 lg:grid-cols-3">
                    {reportContent.featureBlocks.map((block) => (
                      <article
                        key={block.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                      >
                        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                          {block.title}
                        </h3>
                        <ul className="mt-3 space-y-2" role="list">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <FaCircleCheck
                                size={14}
                                className="mt-1 shrink-0 text-emerald-500"
                                aria-hidden="true"
                              />
                              <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="workflow-heading">
                  <h2
                    id="workflow-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaSitemap size={18} className="text-indigo-500" />
                    System Workflow
                  </h2>
                  <div className="grid gap-4">
                    {reportContent.workflowDiagrams.map((workflow) => (
                      <article
                        key={workflow.usecase}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                      >
                        <h3 className="mb-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                          {workflow.usecase}
                        </h3>
                        <img
                          src={workflow.image}
                          alt={workflow.alt}
                          className="w-full rounded-xl border border-slate-200 dark:border-slate-700"
                          loading="lazy"
                        />
                      </article>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="database-heading">
                  <h2
                    id="database-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaDatabase size={18} className="text-blue-500" />
                    Database Design
                  </h2>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <img
                      src={reportContent.erdImage}
                      alt={`ERD for ${project.title}`}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700"
                      loading="lazy"
                    />
                    <div className="mt-4 flex flex-wrap gap-2">
                      {reportContent.erdEntities.map((entity) => (
                        <Badge key={entity}>{entity}</Badge>
                      ))}
                    </div>
                  </div>
                </section>

                {project.challenges && project.challenges.length > 0 && (
                  <section aria-labelledby="challenges-heading">
                    <h2
                      id="challenges-heading"
                      className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                    >
                      <span
                        className="h-5 w-1 rounded-full bg-amber-500"
                        aria-hidden="true"
                      />
                      Technical Challenges
                    </h2>
                    <ol className="space-y-4" role="list">
                      {project.challenges.map((challenge, i) => (
                        <li
                          key={i}
                          className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                        >
                          <span
                            className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white shadow"
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                          <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                            <h3>Problem</h3>
                            <p className="mb-2">{challenge.problem}</p>
                            <h3>Solution</h3>
                            <p>{challenge.solution}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                <section aria-labelledby="performance-heading">
                  <h2
                    id="performance-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaGaugeHigh size={18} className="text-emerald-500" />
                    Performance Optimization
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {reportContent.performanceOptimizations.map((item) => (
                      <article
                        key={item}
                        className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/20 dark:text-emerald-100"
                      >
                        {item}
                      </article>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="deployment-heading">
                  <h2
                    id="deployment-heading"
                    className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                  >
                    <FaRocket size={18} className="text-sky-500" />
                    Deployment
                  </h2>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <ol className="space-y-3">
                      {reportContent.deployment.map((step, index) => (
                        <li key={step} className="flex items-start gap-3">
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Tech Stack (Detailed)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Project Links
                  </h3>
                  <div className="flex flex-col gap-2 sm:max-w-sm">
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="flex w-full items-center justify-center gap-2"
                    >
                      <FaGithub size={16} />
                      View Source
                    </Button>
                    {project.demoUrl !== "#work" && (
                      <Button
                        as="a"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="flex w-full items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt size={14} />
                        {project.demoLabel ?? "Live Demo"}
                      </Button>
                    )}
                  </div>
                </section>
              </div>
            </RevealSection>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
