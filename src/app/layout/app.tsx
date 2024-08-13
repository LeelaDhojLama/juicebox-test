import Container from "@/components/Container/Container";
import Lenis from "@/components/SmoothScroll";
import { ReactNode } from "react";
import Image from "next/image";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
