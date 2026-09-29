"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";
import { APPLICATION_FORM_ID, submitForm } from "@/lib/forms";

type FormErrors = {
  studentName?: string;
  dateOfBirth?: string;
  form?: string;
  guardianName?: string;
  phone?: string;
  email?: string;
  consent?: string;
};

export function ApplicationForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [viaMailto, setViaMailto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(form: HTMLFormElement): FormErrors {
    const data = new FormData(form);
    const e: FormErrors = {};
    const studentName = (data.get("studentName") as string).trim();
    const dateOfBirth = data.get("dateOfBirth") as string;
    const formApplying = data.get("form") as string;
    const guardianName = (data.get("guardianName") as string).trim();
    const phone = (data.get("phone") as string).trim();
    const email = (data.get("email") as string).trim();

    if (!studentName) e.studentName = "Please enter the student's full name.";
    if (!dateOfBirth) e.dateOfBirth = "Please enter a date of birth.";
    if (!formApplying) e.form = "Please select a form.";
    if (!guardianName) e.guardianName = "Please enter the guardian's name.";
    if (!phone) e.phone = "Please enter a phone number.";
    if (!email) e.email = "Please enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!data.get("consent"))
      e.consent = "Please confirm you have read the privacy notice.";

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

    const studentName = (form.elements.namedItem("studentName") as HTMLInputElement)
      ?.value.trim();

    const result = await submitForm(form, {
      formId: APPLICATION_FORM_ID,
      subject: `Online application — ${studentName}`,
    });

    setLoading(false);

    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }

    setViaMailto(result.via === "mailto");
    setSubmitted(true);
  }

  function fieldClasses(field: string) {
    const base =
      "w-full px-4 py-3 text-sm bg-white border rounded-lg text-charcoal placeholder:text-gray-light focus:outline-none focus:ring-2 transition-colors";
    if (errors[field as keyof FormErrors])
      return `${base} border-red-400 focus:ring-red-200 focus:border-red-400`;
    return `${base} border-gray-200 focus:ring-blue-deep/20 focus:border-blue-deep`;
  }

  function fieldError(field: keyof FormErrors) {
    if (!errors[field]) return null;
    return (
      <p id={`${field}-error`} className="mt-1 text-xs text-red-600" role="alert">
        {errors[field]}
      </p>
    );
  }

  if (submitted) {
    return (
      <div className="bg-green-50 rounded-xl p-8 text-center border border-green-200">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 mx-auto mb-4">
          <CheckCircle size={26} />
        </div>
        <h3 className="text-lg font-semibold text-charcoal mb-2">
          Application Received
        </h3>
        <p className="text-sm text-gray leading-relaxed mb-4">
          {viaMailto
            ? "Your email app should have opened with your application pre-filled and addressed to info@vopa.edu. Hit send there and we'll be in touch shortly."
            : "Thank you — your application is with our admissions office. We'll be in touch shortly, usually within one business day."}
        </p>
        <p className="text-xs text-gray-light leading-relaxed">
          Need to add anything? Email us directly at{" "}
          <a
            href="mailto:info@vopa.edu"
            className="text-blue-deep font-semibold underline underline-offset-2"
          >
            info@vopa.edu
          </a>{" "}
          and attach the completed{" "}
          <a
            href="/admission-application-form.pdf"
            className="text-blue-deep font-semibold underline underline-offset-2"
          >
            application form
          </a>
          .
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
      aria-label="Online application form"
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
            htmlFor="studentName"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Student&apos;s Full Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            required
            aria-invalid={!!errors.studentName}
            aria-describedby={errors.studentName ? "studentName-error" : undefined}
            className={fieldClasses("studentName")}
            placeholder="Full name as on birth certificate"
          />
          {fieldError("studentName")}
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            aria-invalid={!!errors.dateOfBirth}
            aria-describedby={errors.dateOfBirth ? "dateOfBirth-error" : undefined}
            className={fieldClasses("dateOfBirth")}
          />
          {fieldError("dateOfBirth")}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Gender
          </label>
          <select id="gender" name="gender" className={fieldClasses("gender")}>
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="form"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Applying for Form
          </label>
          <select
            id="form"
            name="form"
            required
            aria-invalid={!!errors.form}
            aria-describedby={errors.form ? "form-error" : undefined}
            className={fieldClasses("form")}
          >
            <option value="">Select a form</option>
            <option value="Form 1">Form 1</option>
            <option value="Form 2">Form 2</option>
            <option value="Form 3">Form 3</option>
            <option value="Form 4">Form 4</option>
          </select>
          {fieldError("form")}
        </div>
      </div>

      <div>
        <label
          htmlFor="school"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Current or Previous School
        </label>
        <input
          type="text"
          id="school"
          name="school"
          className={fieldClasses("school")}
          placeholder="School name (if transferring)"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="guardianName"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Parent / Guardian Name
          </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            required
            aria-invalid={!!errors.guardianName}
            aria-describedby={errors.guardianName ? "guardianName-error" : undefined}
            className={fieldClasses("guardianName")}
            placeholder="Full name"
          />
          {fieldError("guardianName")}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClasses("phone")}
            placeholder="e.g. 604-1198"
          />
          {fieldError("phone")}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Parent Email
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
        {fieldError("email")}
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Home Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className={fieldClasses("address")}
          placeholder="Street, area"
        />
      </div>

      <div>
        <label
          htmlFor="emergencyContact"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Emergency Contact
        </label>
        <input
          type="text"
          id="emergencyContact"
          name="emergencyContact"
          className={fieldClasses("emergencyContact")}
          placeholder="Name and phone number"
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={`${fieldClasses("notes")} resize-none`}
          placeholder="Questions, special circumstances, preferred visit dates…"
        />
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

      <div>
        <label
          htmlFor="consent"
          className="flex items-start gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            id="consent"
            name="consent"
            value="yes"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-blue-deep focus:ring-2 focus:ring-blue-deep/30 accent-blue-deep"
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            I am the student&rsquo;s parent or guardian, and I have read the{" "}
            <Link
              href="/privacy"
              className="text-blue-deep underline underline-offset-2 hover:text-gold"
            >
              privacy notice
            </Link>{" "}
            and consent to the school processing these details for this
            application.
          </span>
        </label>
        {fieldError("consent")}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.98] hover:shadow-md hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-allowed"
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
            Submit Application
          </>
        )}
      </button>
      <p className="text-xs text-gray-light leading-relaxed">
        Your details go straight to our admissions office. We reply within one
        business day.
      </p>
    </motion.form>
  );
}