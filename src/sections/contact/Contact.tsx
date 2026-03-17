import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import RevealSection from "../../components/layout/RevealSection";
import { profile } from "../../data/profile";
import ContactForm from "./ContactForm";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "khanh18082003",
    href: profile.github,
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Nguyen Trung Khanh",
    href: profile.linkedIn,
    external: true,
  },
];

function Contact() {
  return (
    <section className="py-20 sm:py-28" id="contact">
      <Container>
        <RevealSection>
          <SectionTitle
            label="// contact"
            title="Get in Touch"
            subtitle="Let's build something reliable and scalable together."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-slate-200/60 bg-white/70 p-4 backdrop-blur-sm transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/30 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-blue-800 dark:hover:bg-blue-950/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-500 dark:group-hover:bg-blue-950/30 dark:group-hover:text-blue-400">
                      <item.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
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
