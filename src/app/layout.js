import { Poppins } from "next/font/google";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Akash S Devadiga - FrontEnd Developer",
  description:
    "I'm a passionate Front-End Developer with a focus on building user-centric web experiences using React and Next.js. I enjoy crafting interactive UIs, functional web applications, and implementing creative solutions for complex problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Other head tags */}
        {/* Core Open Graph Meta Tags */}
        <meta property="og:title" content="Akash S Devadiga - Software Developer" />
        <meta
          property="og:description"
          content="Front-End Dev building user-friendly experiences with React & Next.js. Let's craft something awesome!"
        />
        <meta property="og:url" content="https://akashdevadiga.in/" />
        <meta
          property="og:image"
          content="https://akashdevadiga.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile10.6f9acfa3.jpg&w=1920&q=75"
        />
        <meta property="og:type" content="website" />
        {/* Optional but Recommended Meta Tags */}
        <meta property="og:locale" content="en_US" />
        {/* Specify your website's language */}
        {/* Twitter Card Meta Tags (for broader compatibility) */}
        <meta name="twitter:card" content="summary" /> {/* Card type */}
        <meta name="twitter:site" content="@AKASH_devadiga5" />
        {/* Your Twitter handle */}
        <meta name="twitter:title" content="Akash S Devadiga - Software Developer" />
        {/* Same title as OG */}
        <meta
          name="twitter:description"
          content="Front-End Dev building user-friendly experiences with React & Next.js. Let's craft something awesome!"
        />
        {/* Same description as OG */}
        <meta
          name="twitter:image"
          content="https://akashdevadiga.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile10.6f9acfa3.jpg&w=1920&q=75"
        />
        {/* Same image as OG */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </head>
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
