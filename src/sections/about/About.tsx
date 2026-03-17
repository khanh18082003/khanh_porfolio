import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { FaStar, FaAward } from "react-icons/fa6";
import RevealSection from "../../components/layout/RevealSection";

function About() {
  return (
    <section className="py-20 sm:py-28" id="about">
      <Container>
        <RevealSection>
          <SectionTitle
            label="// about"
            title="Introduction"
            subtitle="Backend developer with a passion for building robust, scalable systems."
          />

          <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* About Me */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                About Me
              </h3>
              <div className="space-y-4 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
                <p>
                  I am a Backend Developer passionate about building scalable
                  and reliable backend systems. I graduated with a B.Eng. in
                  Information Technology, majoring in Software Engineering.
                </p>
                <p>
                  My main focus is developing{" "}
                  <strong className="font-semibold text-slate-700 dark:text-slate-300">
                    RESTful APIs
                  </strong>{" "}
                  and backend services using{" "}
                  <strong className="font-semibold text-slate-700 dark:text-slate-300">
                    Java
                  </strong>{" "}
                  and{" "}
                  <strong className="font-semibold text-slate-700 dark:text-slate-300">
                    Spring Boot
                  </strong>
                  . I enjoy working with databases, optimizing system
                  performance, and designing clean architectures.
                </p>
                <p>
                  I also have experience integrating machine learning models
                  into backend systems, including an AI-based phishing detection
                  project. I am eager to continue learning and contributing to
                  impactful software systems.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Education
              </h3>

              <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-800/50">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      Posts and Telecommunications Institute of Technology HCM
                      Branch
                    </h4>
                    <span className="shrink-0 rounded-md bg-blue-50 px-2.5 py-1 font-mono text-xs font-medium text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
                      2021 - 2026
                    </span>
                  </div>

                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Bachelor of Engineering in Information Technology
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800/60">
                      <FaStar className="text-sm text-blue-500" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          GPA
                        </p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          3.15 / 4.0
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5 dark:border-slate-700 dark:bg-slate-800/60">
                      <FaAward className="text-sm text-blue-500" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Major
                        </p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          Software Engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}

export default About;
