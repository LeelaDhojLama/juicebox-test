"use client";

import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LottieAnimationPropTypes {
  autoPlay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationPropTypes> = ({
  autoPlay = false,
}) => {
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      let lottieAnimation = lottie.loadAnimation({
        container: lottieRef.current!,
        renderer: "svg",
        path: "/JB2G_JAI.json",
        autoplay: autoPlay,
      });

      if (autoPlay) {
        lottieAnimation.show();
        gsap.to(lottieRef.current, {
          rotate: 360,
          yoyo: true,
          duration: 1,
          repeat: -1,
        });
      } else {
        lottieAnimation.stop();
      }

      return () => {
        lottieAnimation.destroy();
      };
    }
  }, [autoPlay]);
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
      <div ref={lottieRef}></div>
    </div>
  );
};

export default LottieAnimation;
