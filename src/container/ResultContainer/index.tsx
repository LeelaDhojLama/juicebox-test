"use client";
import LottieAnimation from "@/components/LottieAnimation";
import Label from "@/components/Label";
import { useEffect, useState } from "react";
import { User } from "@/container/FormContainer";
import ToolBar from "@/components/Toolbar";
import { LabelVariant } from "@/components/Label/LabelVariant";
import Button from "@/components/Button/Button";
import { ButtonVariant } from "@/components/Button/ButtonVariant";

import styles from "./ResultContainer.module.css";

function ResultContainer() {
  const [userData, setUserData] = useState<User>({ name: "", email: "" });

  useEffect(() => {
    let userData = localStorage.getItem("user");

    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <ToolBar showBackButton />
      <LottieAnimation autoPlay />
      <div className="text-center pt-8 pb-8 pl-1 pr-1">
        <Label variant={LabelVariant.heading3}>
          <p>Thanks, {userData.name} Now, it’s time to get a reality check. </p>
          <p className="pt-6">This will take 2-3 minutes. </p>
        </Label>
      </div>
      <div className={styles.resultContainer}>
        <Button
          variant={ButtonVariant.secondary}
          label={"Continue"}
          onClick={() => {}}
        />
      </div>
    </>
  );
}

export default ResultContainer;
