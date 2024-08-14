"use client";

import Lottie, { AnimationItem } from "lottie-web";
import React, { use, useEffect, useRef } from "react";
import styles from "./SpeechVector.module.css";
import Image from "next/image";

interface AITalkVectorProps {
  width?: number | string;
  imgRef?: React.RefObject<HTMLImageElement>;
}

const SpeechVector: React.FC<AITalkVectorProps> = ({ width, imgRef }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.maskedImage}`}>
        <div style={{ width: width, margin: "auto" }}>
          <Image
            objectFit="cover"
            ref={imgRef}
            src="/bg-image.png"
            alt="vector"
            width={1200}
            height={800}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeechVector;
