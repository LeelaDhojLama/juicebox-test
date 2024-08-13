"use client";
import { ArrowLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import styles from "./toolbar.module.css";
import LogoAnimation from "../AnimatedLogo";
import { useRouter } from "next/navigation";
import { ToolBarBackClickProvider, useClick } from "@/conext/ScaleContext";

interface ToolBarProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function ToolBar({
  showBackButton = true,
  onBackClick = useRouter().back,
}: ToolBarProps) {
  return (
    <div className={styles.container}>
      {showBackButton ? (
        <div className={styles.iconWrapper} onClick={onBackClick}>
          <ArrowLeftIcon className={styles.icon} />
        </div>
      ) : (
        <div className="" onClick={onBackClick}></div>
      )}
      <LogoAnimation />
      <div className={styles.iconWrapper}>
        <ArrowPathIcon className={styles.icon} />
      </div>
    </div>
  );
}
