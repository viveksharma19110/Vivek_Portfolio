import "@/scss/globals.css";
import "@/scss/index.scss";
import type { AppProps } from "next/app";
import { Raleway, Fira_Code } from "next/font/google";
import React, { useEffect } from "react";

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Ensure the app starts in dark mode on first load.
    // (Theme toggle still works after this via Navbar.)
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.setAttribute("data-theme", "dark");
    try {
      localStorage.setItem("theme", "dark");
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firaCode.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
