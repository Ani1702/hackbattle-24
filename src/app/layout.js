import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const pixeboy = localFont({
  src: "fonts/Pixeboy.ttf",
  variable: "--pixeboy",
});

const crackman = localFont({
  src: "fonts/Crackman.otf",
  variable: "--crackman",
});

const mercutio = localFont({
  src: "fonts/Mercutio.ttf",
  variable: "--mercutio",
});

export const metadata = {
  title: "HackBattle '24",
  description:
    "Website for HackBattle 2024, a hackathon organized by IEEE-CS VIT",
};

const toastOptions = {
  className: "font-pixeboy border border-black text-xl",
  duration: 5000,
  style: {
    background: "#F5ED02",
    color: "black",
  },
  success: {
    duration: 3000,
    theme: {
      primary: "#F5ED02",
      secondary: "black",
    },
  },
  error: {
    duration: 3000,
    theme: {
      primary: "#F5ED02",
      secondary: "black",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KRXQXY85DH"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-KRXQXY85DH');
        </script>
        <link
          rel="preload"
          href="/fonts/Pixeboy.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Crackman.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Mercutio.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${pixeboy.variable}  ${crackman.variable} ${mercutio.variable}`}
      >
        <Toaster position="bottom-right" toastOptions={toastOptions} />
        {children}
      </body>
    </html>
  );
}
