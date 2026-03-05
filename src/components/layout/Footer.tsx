import Container from "./Container";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
      <Container>
        <p className="text-center text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Nguyễn Trung Khánh. Built with React,
          TypeScript, Vite, and TailwindCSS.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
