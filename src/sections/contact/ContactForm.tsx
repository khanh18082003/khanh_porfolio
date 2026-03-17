import Button from "../../components/ui/Button";
import { FiSend } from "react-icons/fi";

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white/80 px-3.5 py-2.5 text-sm text-slate-700 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-400";

function ContactForm() {
  return (
    <form
      className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-800/50"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          className={`min-h-32 resize-none ${inputClasses}`}
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="mt-5">
        <Button type="submit">
          <FiSend size={14} />
          Send Message
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
