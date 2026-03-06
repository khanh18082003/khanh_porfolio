import Container from "../../components/layout/Container";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import { profile } from "../../data/profile";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import RevealSection from "../../components/layout/RevealSection";

function Hero() {
  return (
    <section className="py-16 sm:py-20" id="hero">
      <Container>
        <RevealSection y={20}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600"
              >
                HELLO, I'M
              </motion.p>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
                {profile.name}
              </h1>
              <h2 className="text-xl font-bold text-emerald-600 sm:text-2xl">
                {profile.roleLabel}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                {profile.summary}
              </p>

              <div className="flex items-center gap-3">
                <a
                  aria-label="GitHub"
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </div>

              <HeroActions />
            </div>

            <div className="order-1 lg:order-2">
              <HeroImage imageSrc={profile.heroImage} name={profile.name} />
            </div>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}

export default Hero;
