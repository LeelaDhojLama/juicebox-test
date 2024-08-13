"use client";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

import styles from "./TextInput.module.css";
import { useEffect, useRef } from "react";

interface TextInputPropTypes {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  errorMessage: string;
  required: boolean;
  textInputRef: React.RefObject<HTMLInputElement>;
  onClick: () => void;
  onTextChange: (e: HTMLInputElement) => void;
}

const TextInput: React.FC<TextInputPropTypes> = ({
  name,
  onClick,
  type,
  placeholder,
  value,
  onTextChange,
  errorMessage,
  required,
  textInputRef,
}) => {
  return (
    <>
      <div className={styles.textInputWrapper}>
        <input
          ref={textInputRef}
          name={name}
          className={`${styles.formInput} ${
            errorMessage !== "" ? styles.inputError : ""
          }`}
          autoFocus
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => onTextChange(e.currentTarget)}
        />
        <button
          disabled={value === ""}
          onClick={onClick}
          className={styles.iconWrapper}
        >
          <div className={styles.icon}>
            <ArrowUpIcon />
          </div>
        </button>
      </div>
      <span className={styles.errorMessage}>{errorMessage}</span>
    </>
  );
};

export default TextInput;
