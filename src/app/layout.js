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

export const metadata = {
  metadataBase: new URL("https://sksyntax.com"),

  title: {
    default: "SKSyntax — We Build. We Optimize. We Grow.",
    template: "%s | SKSyntax",
  },

  description:
    "SKSyntax provides professional website development, SEO, Meta Ads, and Google Ads solutions to help businesses grow online.",

  keywords: [
    "website development",
    "web development",
    "SEO services",
    "Meta Ads",
    "Google Ads",
    "digital marketing",
    "SKSyntax",
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
    title: "SKSyntax — We Build. We Optimize. We Grow.",
    description:
      "Professional website development, SEO, Meta Ads, and Google Ads solutions for businesses that want to grow online.",
    url: "https://sksyntax.com",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "SKSyntax — We Build. We Optimize. We Grow.",
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
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SKSyntax",
      url: "https://sksyntax.com",
      description:
        "SKSyntax provides professional website development, SEO, Meta Ads, and Google Ads solutions to help businesses grow online.",
    }),
  }}
/>
        
      </body>
    </html>
  );
}