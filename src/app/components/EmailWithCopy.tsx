"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const EmailWithCopy = () => {
  const email = "cesarnegretes100@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <div className="email-container">
      <p className="email-text">
        <span className="email-label">Correo:</span> {email}
      </p>

      <button
        onClick={copyToClipboard}
        className={`copy-btn ${copied ? "copied" : ""}`}
        aria-label={copied ? "Correo copiado" : "Copiar correo"}
      >
        {copied ? (
          <>
            <FiCheck className="icon" />
            <span>Copiado!</span>
          </>
        ) : (
          <>
            <FiCopy className="icon" />
            <span>Copiar</span>
          </>
        )}
      </button>
    </div>
  );
};

export default EmailWithCopy;
