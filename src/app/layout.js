import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Akash S Devadiga - FrontEnd Developer",
  description: "I'm a passionate Front-End Developer with a focus on building user-centric web experiences using React and Next.js. I enjoy crafting interactive UIs, functional web applications, and implementing creative solutions for complex problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
