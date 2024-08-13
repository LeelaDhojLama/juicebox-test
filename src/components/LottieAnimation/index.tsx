"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/JB2G_JAI.json";
import { useEffect, useRef, useState } from "react";
import { AnimationDirection } from "lottie-web";

interface LottieAnimation {
  autoPlay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimation> = ({ autoPlay = false }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(15);
    }
  }, []);
  return (
    <div
      className="rotating-lottie-container"
      style={{
        width: "32px",
        height: "32px",
        margin: "auto",
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        aria-aria-labelledby="use lottie animation"
        autoplay={autoPlay}
        loop={autoPlay}
        start={0}
      />
    </div>
  );
};

export default LottieAnimation;
