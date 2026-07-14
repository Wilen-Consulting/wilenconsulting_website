const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type ContactFormFields = {
  name: string;
  email: string;
  company?: string;
  message: string;
  subject?: string;
};

export async function submitContactForm(fields: ContactFormFields): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error(
      "Missing VITE_WEB3FORMS_ACCESS_KEY. Get a free key at https://web3forms.com and add it to your .env file.",
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: fields.subject ? `New inquiry: ${fields.subject}` : "New website inquiry",
      from_name: "Wilen Consulting website",
      name: fields.name,
      email: fields.email,
      company: fields.company,
      message: fields.message,
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Failed to send message.");
  }
}
