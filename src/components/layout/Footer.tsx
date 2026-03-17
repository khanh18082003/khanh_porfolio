import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 transition-colors dark:border-slate-800/60">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Nguyen Trung Khanh
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
