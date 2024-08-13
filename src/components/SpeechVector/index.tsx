"use client";

import Lottie, { AnimationItem } from "lottie-web";
import React, { use, useEffect, useRef } from "react";
import styles from "./SpeechVector.module.css";

interface AITalkVectorProps {
  width?: number | string;
  imgRef?: React.RefObject<HTMLImageElement>;
}

const SpeechVector: React.FC<AITalkVectorProps> = ({ width, imgRef }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.maskedImage}`}>
        <img
          ref={imgRef}
          src="/bg-image.png"
          alt="vector"
          style={{ width: width }}
        />
      </div>
    </div>
  );
};

export default SpeechVector;
