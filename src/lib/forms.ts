import { site } from "./site";

// Formspree form ids (https://formspree.io/manage). These are public
// identifiers — they are visible in the page source by design — so the live id
// is the default and the env vars only exist to override it.
const DEFAULT_FORMSPREE_ID = "mjykjrba";

export const CONTACT_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || DEFAULT_FORMSPREE_ID;
export const APPLICATION_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_APPLICATION_ID || DEFAULT_FORMSPREE_ID;

export type SubmitResult =
  | { ok: true; via: "formspree" }
  | { ok: true; via: "mailto" }
  | { ok: false; message: string };

function buildMailto(form: HTMLFormElement, subject: string) {
  const data = new FormData(form);
  const body = Array.from(data.entries())
    .filter(([key]) => !key.startsWith("_"))
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Sends a form to Formspree. If no form id is configured the visitor's mail
 * client is opened instead, so the site never silently drops a message.
 */
export async function submitForm(
  form: HTMLFormElement,
  options: { formId?: string; subject: string },
): Promise<SubmitResult> {
  const honeypot = new FormData(form).get("_gotcha");
  if (honeypot) return { ok: true, via: "formspree" };

  if (!options.formId) {
    window.location.href = buildMailto(form, options.subject);
    return { ok: true, via: "mailto" };
  }

  const payload = Object.fromEntries(
    Array.from(new FormData(form).entries()).filter(
      ([key]) => !key.startsWith("_"),
    ),
  );

  try {
    const response = await fetch(`https://formspree.io/f/${options.formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, _subject: options.subject }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message:
          "We could not send your message just now. Please try again, or email us directly.",
      };
    }

    return { ok: true, via: "formspree" };
  } catch {
    return {
      ok: false,
      message:
        "Something went wrong sending your message. Please try again, or email us directly.",
    };
  }
}
