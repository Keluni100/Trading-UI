"use client";

import Script from "next/script";
import { initPaddle } from "@/lib/paddle/checkout";

export default function PaddleScript() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/v2/paddle.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log("[Paddle] Script loaded ✓");
        initPaddle();
      }}
    />
  );
}