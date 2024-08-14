"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TutorialCard from "@/components/Card/TutorialCard";

import { Pagination } from "swiper/modules";
import Button from "@/components/Button/Button";
import { buttonStyles, ButtonVariant } from "@/components/Button/ButtonVariant";
import React, { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import AITalkVector from "@/components/SpeechVector";
import ToolBar from "@/components/Toolbar";
import { useRouter } from "next/navigation";

import gsap from "gsap";

interface TutorialGuide {
  message: string;
}

const tutorialGuideMessages: string[] = [
  "Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.",
  "I’ll ask you a handful of meaningful questions and compare your responses with people in your industry. ",
  "You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
];

const SwiperContainer = () => {
  const [isSwiperLastIndex, setIsSwiperLastIndex] = useState<boolean>(false);
  const swiperRef = useRef<SwiperCore | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  let tl = gsap.timeline();

  const onNextClick = () => {
    if (isSwiperLastIndex) {
      tl.to(imgRef.current, {
        width: 32,
        duration: 0.8,
        opacity: 0,
        onComplete: () => {
          router.push("/pages/form");
        },
      }).to(
        divRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "<"
      );
    }
    swiperRef.current?.slideNext();
  };

  const onBackClick = () => {
    if (swiperRef.current?.activeIndex === 0) {
      router.back();
      return;
    }
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <div style={{ paddingBottom: 32 }}>
        <ToolBar onBackClick={onBackClick} />
        <AITalkVector imgRef={imgRef} width={"50%"} />
        <div ref={divRef}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => {
              setIsSwiperLastIndex(
                swiperRef.current?.activeIndex ===
                  tutorialGuideMessages.length - 1
              );
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
            style={{ padding: "32px 0 60px 0" }}
          >
            {tutorialGuideMessages.map(
              (tutorialGuideMessage: string, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <TutorialCard message={tutorialGuideMessage} />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
          <div style={{ paddingTop: 32 }}>
            <Button
              variant={
                isSwiperLastIndex
                  ? ButtonVariant.secondary
                  : ButtonVariant.secondaryOutline
              }
              label={isSwiperLastIndex ? "Get Started" : "Continue"}
              onClick={onNextClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperContainer;
