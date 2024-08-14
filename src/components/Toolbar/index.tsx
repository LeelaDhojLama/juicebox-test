"use client";
import { ArrowLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import styles from "./toolbar.module.css";
import LogoAnimation from "../AnimatedLogo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ToolBarProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function ToolBar({
  showBackButton = true,
  onBackClick,
}: ToolBarProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {showBackButton ? (
        <div
          className={styles.iconWrapper}
          onClick={() => {
            onBackClick ? onBackClick() : router.back();
          }}
        >
          <ArrowLeftIcon className={styles.icon} />
        </div>
      ) : (
        <div className=""></div>
      )}
      <LogoAnimation />
      <div className={styles.iconWrapper}>
        <ArrowPathIcon className={styles.icon} />
      </div>
    </div>
  );
}
