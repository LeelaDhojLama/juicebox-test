"use client";
import { useEffect, useRef } from "react";
import styles from "./Button.module.css";
import { buttonStyles, ButtonVariant } from "./ButtonVariant";

interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  focused?: boolean;
  onClick: () => void;
}

function Button({ variant, label, onClick, focused = false }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (focused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  return (
    <button
      ref={buttonRef}
      className={`${styles.btn} ${buttonStyles[variant]} w-full p-[var(--button-padding)] rounded-[var(--border-radius)]  `}
      onClick={onClick}
      autoFocus={focused}
    >
      {label}
    </button>
  );
}

export default Button;
