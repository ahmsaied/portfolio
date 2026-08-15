import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

interface SecureInjectProps {
  type: "email" | "phone";
  className?: string;
}

// Obfuscated Base64 Encoded Values
// "eng.ahm.saied@gmail.com" => "ZW5nLmFobS5zYWllZEBnbWFpbC5jb20="
// "+20 100 265 2078" => "KzIwIDEwMCAyNjUgMjA3OA=="
const OBFUSCATED_DATA = {
  email: "ZW5nLmFobS5zYWllZEBnbWFpbC5jb20=",
  phone: "KzIwIDEwMCAyNjUgMjA3OA==",
};

export const SecureInject: React.FC<SecureInjectProps> = ({ type, className = "" }) => {
  const [revealedText, setRevealedText] = useState<string>("Loading...");

  useEffect(() => {
    // Dynamic JavaScript Injection after client hydration
    const timer = setTimeout(() => {
      try {
        const decoded = atob(OBFUSCATED_DATA[type]);
        setRevealedText(decoded);
      } catch (err) {
        setRevealedText(type === "email" ? "eng[at]gmail" : "+20...");
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [type]);

  const handleDynamicAction = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const decoded = atob(OBFUSCATED_DATA[type]);
      if (type === "email") {
        window.location.href = `mailto:${decoded}`;
      } else {
        window.open(`https://wa.me/${decoded.replace(/[^0-9]/g, "")}`, "_blank");
      }
    } catch (err) {
      console.error("Action error");
    }
  };

  return (
    <button
      onClick={handleDynamicAction}
      className={`text-left focus:outline-none ${className}`}
      title="Click to interact securely"
    >
      <span className="select-none font-mono">{revealedText}</span>
    </button>
  );
};

export default SecureInject;
