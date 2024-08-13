import Image from "next/image";
import "lenis/dist/lenis.css";

import HomePageContainer from "@/container/Home/HomePageContainer";
import ToolBar from "@/components/Toolbar";
import { useEffect } from "react";
import Lenis from "@/components/SmoothScroll";

export default function Home() {
  return (
    <Lenis root>
      <ToolBar showBackButton={false} />
      <HomePageContainer />
    </Lenis>
  );
}
