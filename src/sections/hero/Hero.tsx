import Container from "../../components/layout/Container";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import { profile } from "../../data/profile";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
      id="hero"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/10" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-slate-100/60 blur-3xl dark:bg-slate-800/20" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block font-mono text-sm font-medium text-blue-600 dark:text-blue-400">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-medium text-blue-600 sm:text-2xl dark:text-blue-400"
            >
              {profile.roleLabel}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <a
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} />
              </a>
              <a
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <HeroActions />
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroImage imageSrc={profile.heroImage} name={profile.name} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
