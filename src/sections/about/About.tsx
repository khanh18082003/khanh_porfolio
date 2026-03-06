import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { FaUser, FaGraduationCap, FaStar, FaAward } from "react-icons/fa6";
import RevealSection from "../../components/layout/RevealSection";

function About() {
  return (
    <section className="py-16 sm:py-20" id="about">
      <Container>
        <RevealSection>
          <SectionTitle title="Introduction" />
          <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-emerald-600" />

          <div className="mt-16 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* About Me */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <FaUser className="text-2xl text-emerald-600" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  About Me
                </h3>
              </div>

              <div className="space-y-6 border-l-2 border-emerald-100 pl-6 text-lg leading-relaxed text-slate-600 dark:border-emerald-900/30 dark:text-slate-400">
                <p>
                  I am a Backend Developer passionate about building scalable
                  and reliable backend systems. I graduated with a B.Eng. in
                  Information Technology, majoring in Software Engineering.
                </p>
                <p>
                  My main focus is developing{" "}
                  <strong className="text-emerald-500">RESTful APIs</strong> and
                  backend services using{" "}
                  <strong className="text-emerald-500">Java</strong> and{" "}
                  <strong className="text-emerald-500">Spring Boot</strong>. I
                  enjoy working with databases, optimizing system performance,
                  and designing clean architectures.
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
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-2xl text-emerald-600" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Education
                </h3>
              </div>

              <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-600 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:border-l-emerald-600 dark:bg-slate-900">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                      Posts and Telecommunications Institute of Technology HCM
                      Branch
                    </h4>
                    <span className="self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:bg-emerald-950/30">
                      2021 – 2026
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-emerald-600">
                      Bachelor of Engineering in Information Technology
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                      <FaStar className="text-lg text-emerald-600" />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                          GPA Score
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          3.15 / 4.0
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                      <FaAward className="text-lg text-emerald-600" />
                      <div>
                        <p className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                          Major
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
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
