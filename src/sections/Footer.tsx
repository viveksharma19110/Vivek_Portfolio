"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("viveksharma19110@gmail.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "var(--fira-code)",
        color: "var(--lightest-slate)",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Connect with me
        </h2>
        <p
          style={{
            fontSize: "16px",
            margin: "10px 0",
            color: "var(--slate)",
          }}
        >
          I would love to hear from you! Connect with me on my social media.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Link
            href="https://github.com/viveksharma19110"
            target="_blank"
            style={{
              color: "var(--lightest-slate)",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <FiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vivekkumarsharma19110/"
            target="_blank"
            style={{
              color: "var(--lightest-slate)",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <FiLinkedin />
          </Link>
          <button
            onClick={handleCopyEmail}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "var(--lightest-slate)",
              fontSize: "24px",
              position: "relative",
            }}
          >
            <HiOutlineMail />
            {showCopied && (
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--light-navy)",
                  color: "var(--lightest-slate)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                Email copied!
              </div>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;