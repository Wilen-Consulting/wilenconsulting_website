// Google Apps Script Web App that receives contact-form submissions, emails
// aviva@wilenconsulting.com, and logs a row to the "Wilen Consulting -
// Contact Form Submissions" Google Sheet. The recipient address is set inside
// the Apps Script code itself, not here. See CONTACT_FORM_SETUP.md (in the
// project root) for the one-time deployment steps that produce this URL.
export const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwt0_1xw7FdQta2FBu1YHaxF7KoKm5DRWTn0NztYdNTW-sGM0n9lPIuMzcbSGNktMgL/exec";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
};

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  if (!CONTACT_ENDPOINT || CONTACT_ENDPOINT.startsWith("REPLACE_WITH")) {
    throw new Error(
      "Contact form endpoint isn't configured yet. Set CONTACT_ENDPOINT in src/lib/contact-endpoint.ts to your deployed Apps Script Web App URL (see CONTACT_FORM_SETUP.md).",
    );
  }

  // Apps Script web apps don't send CORS headers, so the browser can never
  // read the response to a normal fetch. We send a "simple" no-cors POST
  // with a text/plain body (this avoids a preflight OPTIONS request, which
  // Apps Script doesn't handle) — Apps Script still runs doPost() and sends
  // the email / writes the sheet row either way, we just can't inspect the
  // response. A fetch that doesn't throw is treated as a successful send.
  await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
}
