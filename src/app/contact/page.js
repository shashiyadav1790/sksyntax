import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact SKSyntax | Start Your Digital Project",
  description:
    "Get in touch with SKSyntax for website development, SEO, Meta Ads, and Google Ads. Tell us about your project and digital growth goals.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SKSyntax | Start Your Digital Project",
    description:
      "Get in touch with SKSyntax for website development, SEO, Meta Ads, and Google Ads.",
    url: "https://www.sksyntax.com/contact",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}