import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SKSyntax",
  alternateName: "SK Syntax",
  url: "https://www.sksyntax.com",
  description:
    "SKSyntax provides professional website development, SEO, Meta Ads, and Google Ads solutions to help businesses grow online.",
  sameAs: [
    "https://www.instagram.com/sksyntax/",
    "https://www.facebook.com/sksyntax/",
    "https://www.linkedin.com/in/shashi-yadav88/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SKSyntax",
  url: "https://www.sksyntax.com",
  description:
    "Professional website development, SEO, Meta Ads, and Google Ads solutions for businesses that want to grow online.",
};

export const metadata = {
  metadataBase: new URL("https://www.sksyntax.com"),

  title: {
    default: "SKSyntax — Web Development, SEO & Digital Marketing",
    template: "%s | SKSyntax",
  },

  description:
    "SKSyntax provides professional website development, SEO, Meta Ads, and Google Ads solutions to help businesses grow online.",

  keywords: [
    "SKSyntax",
    "website development",
    "web development",
    "SEO services",
    "Meta Ads",
    "Google Ads",
    "digital marketing",
  ],

  authors: [{ name: "SKSyntax" }],
  creator: "SKSyntax",
  publisher: "SKSyntax",

  alternates: {
    canonical: "./",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "SKSyntax",
    title: "SKSyntax — Web Development, SEO & Digital Marketing",
    description:
      "Professional website development, SEO, Meta Ads, and Google Ads solutions for businesses that want to grow online.",
    url: "https://www.sksyntax.com",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "SKSyntax — Web Development, SEO & Digital Marketing",
    description:
      "Professional website development, SEO, Meta Ads, and Google Ads solutions for businesses that want to grow online.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
            ]),
          }}
        />
      </body>
    </html>
  );
}