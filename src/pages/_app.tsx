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
    const savedTheme = localStorage.getItem("theme");
    const initialTheme: "light" | "dark" =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

    document.documentElement.setAttribute("data-theme", initialTheme);
    document.body.setAttribute("data-theme", initialTheme);

    // Only set default if user never picked a theme.
    if (savedTheme !== initialTheme) {
      try {
        localStorage.setItem("theme", initialTheme);
      } catch {
        // ignore storage errors
      }
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
