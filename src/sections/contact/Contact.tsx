import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { profile } from "../../data/profile";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="py-16 sm:py-20" id="contact">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let’s build something reliable and scalable together."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            <p className="text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-100">Email:</span>{" "}
              {profile.email}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-100">GitHub:</span>{" "}
              {profile.github}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn:</span>{" "}
              {profile.linkedIn}
            </p>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
