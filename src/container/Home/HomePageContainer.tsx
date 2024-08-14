"use client";

import styles from "./HomePageContainer.module.css";
import { ButtonVariant } from "@/components/Button/ButtonVariant";
import Button from "@/components/Button/Button";
import { useRouter, usePathname } from "next/navigation";
import SpeechVector from "@/components/SpeechVector";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Label from "@/components/Label";
import { LabelVariant } from "@/components/Label/LabelVariant";

function HomePageContainer() {
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();

  const tl = gsap.timeline();

  useEffect(() => {
    if (divRef) {
      tl.fromTo(
        imgRef.current,
        { scale: 0.8, opacity: 0 }, // Starting state
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        }
      ).fromTo(
        divRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" },
        "<"
      );
    }
  }, [tl]);

  const onClick = () => {
    tl.to(imgRef.current, {
      width: "50%",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Navigate to the new route after the animation completes
        router.push("/pages/tutorial");
      },
    }).to(
      divRef.current,
      { opacity: 0, duration: 1, ease: "power2.inOut" },
      "<"
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className="relative">
          <SpeechVector width={"100%"} imgRef={imgRef} />
          <div ref={divRef}>
            <div className={`${styles.contentOverlay} content-overlay`}>
              <p>WA businesses feel confident about future growth</p>
              <p>AI cant replace creativity</p>
              <p>Sales measure true success</p>
              <p>Human connection drives WA business</p>
              <p>
                The primary barrier to digital transformation is financial
                investment
              </p>
            </div>
            <div className={`text-center  ${styles.headingWrapper}`}>
              <Label variant={LabelVariant.heading1}>
                Compare your thoughts on{" "}
                <span className={styles.textGradient}>technology</span> with
                current industry opinions.
              </Label>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant={ButtonVariant.primary}
        label="Get a reality check"
        onClick={onClick}
        focused
      />
    </>
  );
}

export default HomePageContainer;
