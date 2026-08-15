import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-[3px] h-[1em] bg-cyan-400 align-middle ml-1 animate-pulse" />
    </span>
  );
};

export default TypewriterText;
