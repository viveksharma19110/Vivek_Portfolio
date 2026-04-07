import React from "react";

function Button({
  text,
  link,
  download,
  downloadFilename,
}: {
  text: string;
  link: string;
  download?: boolean;
  downloadFilename?: string;
}) {
  const isExternal = /^https?:\/\//i.test(link);
  const derivedFilename = downloadFilename ?? link.split("/").pop() ?? undefined;

  return (
    <a
      className="btn"
      href={link}
      target={!download && isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={download ? derivedFilename ?? true : undefined}
    >
      {text}
    </a>
  );
}

export default Button;
