import Button from "../../components/ui/Button";

function ContactForm() {
  return (
    <form
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-700 outline-none transition-all duration-300 focus:border-emerald-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder:text-slate-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-700 outline-none transition-all duration-300 focus:border-emerald-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder:text-slate-500"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          className="min-h-32 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-700 outline-none transition-all duration-300 focus:border-emerald-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder:text-slate-500"
          placeholder="Tell me about your project"
        />
      </div>

      <div className="mt-5">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}

export default ContactForm;
