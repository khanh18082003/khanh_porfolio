import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import RevealSection from "../../components/layout/RevealSection";
import { profile } from "../../data/profile";
import ContactForm from "./ContactForm";
import Card from "../../components/ui/Card";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <section className="py-16 sm:py-20" id="contact">
      <Container>
        <RevealSection>
          <SectionTitle
            title="Contact"
            subtitle="Let’s build something reliable and scalable together."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Card className="space-y-4 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Contact Info
                </h3>

                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${profile.email}`}
                      className="group flex items-start gap-3 rounded-lg border border-slate-200 px-3 py-3 transition-colors hover:border-emerald-500 hover:bg-emerald-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30"
                    >
                      <FaEnvelope
                        size={18}
                        className="mt-0.5 text-slate-500 group-hover:text-emerald-600 dark:text-slate-400"
                      />
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Email
                        </span>
                        <span className="block break-all text-sm text-slate-700 dark:text-slate-300">
                          {profile.email}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-lg border border-slate-200 px-3 py-3 transition-colors hover:border-emerald-500 hover:bg-emerald-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30"
                    >
                      <FaGithub
                        size={18}
                        className="mt-0.5 text-slate-500 group-hover:text-emerald-600 dark:text-slate-400"
                      />
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          GitHub
                        </span>
                        <span className="block break-all text-sm text-slate-700 dark:text-slate-300">
                          {profile.github}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={profile.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-lg border border-slate-200 px-3 py-3 transition-colors hover:border-emerald-500 hover:bg-emerald-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30"
                    >
                      <FaLinkedin
                        size={18}
                        className="mt-0.5 text-slate-500 group-hover:text-emerald-600 dark:text-slate-400"
                      />
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          LinkedIn
                        </span>
                        <span className="block break-all text-sm text-slate-700 dark:text-slate-300">
                          {profile.linkedIn}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}

export default Contact;
