"use client";
import LottieAnimation from "@/components/LottieAnimation";
import TextInput from "@/components/TextInput/TextInput";
import Label from "@/components/Label";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./form.module.css";
import ToolBar from "@/components/Toolbar";
import { LottieRefCurrentProps } from "lottie-react";
import gsap from "gsap";
import { LabelVariant } from "@/components/Label/LabelVariant";
import { validateEmail, validateName } from "@/utils/FormValidation";

export interface User {
  name: string;
  email: string;
}

const formSteps = [
  {
    label: "Let’s start with the basics. Type in your first name.",
  },
  {
    label: "How should we contact you? Type in your email address.",
  },
];

function FormPage() {
  const [formIndex, setFormIndex] = useState<number>(0);
  const router = useRouter();
  const [userData, setUserData] = useState<User>({ name: "", email: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const divRef = useRef<HTMLDivElement | null>(null);
  const inputTextRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputTextRef.current?.focus();
    gsap.fromTo(
      divRef,
      {
        duration: 4,
        opacity: 0,
        ease: "elastic",
      },
      {
        duration: 5,
        opacity: 1,
      }
    );
  }, []);

  const onClick = () => {
    if (formIndex === 0) {
      if (!validateName(userData.name)) {
        setErrorMessage("Please enter a valid first name");
        return;
      }

      setErrorMessage("");
      setFormIndex(1);
    } else {
      if (!validateEmail(userData.email)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }
      setErrorMessage("");
      localStorage.setItem("user", JSON.stringify(userData));
      router.push(`/pages/result`);
    }
  };

  const onTextChange = (e: HTMLInputElement) => {
    setUserData({
      ...userData,
      [e.name]: e.value,
    });
  };

  const onBackClick = () => {
    if (formIndex === 0) {
      router.back();
    } else {
      setFormIndex(formIndex - 1);
    }
  };

  return (
    <div ref={divRef}>
      <ToolBar showBackButton={true} onBackClick={onBackClick} />
      <LottieAnimation autoPlay={false} />
      <div className="text-center pt-8 pb-8">
        <Label variant={LabelVariant.heading3}>
          {formSteps[formIndex].label}
        </Label>
      </div>
      <div className="absolute bottom-0 right-6 left-6">
        {formIndex === 0 ? (
          <>
            <div>
              <TextInput
                textInputRef={inputTextRef}
                name="name"
                type="text"
                onClick={onClick}
                placeholder="First Name"
                value={userData.name}
                onTextChange={onTextChange}
                errorMessage={errorMessage}
                required
              />
            </div>
          </>
        ) : (
          <>
            <TextInput
              textInputRef={inputTextRef}
              name="email"
              type="email"
              onClick={onClick}
              placeholder="Email"
              required
              value={userData.email}
              onTextChange={onTextChange}
              errorMessage={errorMessage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default FormPage;
