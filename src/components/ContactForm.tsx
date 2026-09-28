"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { CONTACT_FORM_ID, submitForm } from "@/lib/forms";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export function ContactForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [viaMailto, setViaMailto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(form: HTMLFormElement): FormErrors {
    const data = new FormData(form);
    const e: FormErrors = {};
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const subject = data.get("subject") as string;
    const message = (data.get("message") as string).trim();

    if (!name) e.name = "Please enter your name.";
    if (!email) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!subject) e.subject = "Please select a topic.";
    if (!message) e.message = "Please enter a message.";

    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setLoading(true);

    const result = await submitForm(form, {
      formId: CONTACT_FORM_ID,
      subject: "Website enquiry from the contact form",
    });

    setLoading(false);

    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }

    setViaMailto(result.via === "mailto");
    setSubmitted(true);
  }

  function fieldClasses(field: keyof FormErrors) {
    const base =
      "w-full px-4 py-3 text-sm bg-white border rounded-lg text-charcoal placeholder:text-gray-light focus:outline-none focus:ring-2 transition-colors";
    if (errors[field])
      return `${base} border-red-400 focus:ring-red-200 focus:border-red-400`;
    return `${base} border-gray-200 focus:ring-blue-deep/20 focus:border-blue-deep`;
  }

  if (submitted) {
    return (
      <div className="bg-blue-deep/5 rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-deep/10 flex items-center justify-center text-blue-deep mx-auto mb-4">
          <PaperPlaneTilt size={24} />
        </div>
        <h3 className="text-lg font-semibold text-charcoal mb-2">
          Message Sent
        </h3>
        <p className="text-sm text-gray">
          {viaMailto
            ? "Your email app should have opened with the message ready to send. If it didn't, write to us directly and we'll pick it up from there."
            : "Thank you for reaching out. We will get back to you within 1-2 business days."}
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-5"
      aria-label="Contact form"
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses("name")}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClasses("subject")}
        >
          <option value="">Select a topic</option>
          <option value="admissions">Admissions Inquiry</option>
          <option value="academics">Academic Programs</option>
          <option value="visit">Schedule a Visit</option>
          <option value="general">General Question</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-600" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClasses("message")} resize-none`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {submitError && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          {submitError}{" "}
          <a
            href="mailto:info@vopa.edu"
            className="font-semibold underline underline-offset-2"
          >
            info@vopa.edu
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.98] hover:shadow-md hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <PaperPlaneTilt size={16} />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}
