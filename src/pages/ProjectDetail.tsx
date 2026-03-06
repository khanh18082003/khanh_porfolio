import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Container from "../components/layout/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Badge from "../components/ui/Badge";
import RevealSection from "../components/layout/RevealSection";
import { projects } from "../data/projects";
import Button from "../components/ui/Button";

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero banner */}
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
          <img
            src={project.image === "" ? fallbackImage : project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 from-slate-900/80 via-slate-900/30 to-transparent" />

          {/* Back button */}
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

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <Container>
              <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl [text-shadow:0_0_4px_#000,0_0_4px_#000,0_0_8px_rgba(0,0,0,0.8)]">
                {project.title}
              </h1>
            </Container>
          </div>
        </div>

        {/* Content */}
        <Container>
          <div className="py-10 lg:py-14">
            <RevealSection>
              <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
                {/* Left: main report */}
                <div className="space-y-10 lg:col-span-2">
                  {/* Overview */}
                  <section aria-labelledby="overview-heading">
                    <h2
                      id="overview-heading"
                      className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100"
                    >
                      <span
                        className="h-5 w-1 rounded-full bg-emerald-500"
                        aria-hidden="true"
                      />
                      Overview
                    </h2>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.overview ?? project.description}
                    </p>
                  </section>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
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
                      <ul className="space-y-3" role="list">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-700/60 dark:bg-slate-800/50"
                          >
                            <FaCircleCheck
                              size={16}
                              className="mt-0.5 shrink-0 text-emerald-500"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Challenges */}
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
                        Challenges & Solutions
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
                            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                              {challenge}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}
                </div>

                {/* Right: sidebar */}
                <aside
                  className="space-y-6 lg:col-span-1"
                  aria-label="Project details"
                >
                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        At a Glance
                      </h3>
                      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {project.highlights.map((h) => (
                          <div
                            key={h.label}
                            className="rounded-lg bg-slate-50 px-3 py-2.5 dark:bg-slate-700/50"
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
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Links
                    </h3>
                    <div className="flex flex-col gap-2">
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
                  </div>
                </aside>
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
