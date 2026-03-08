 "use client";

import { useEffect } from "react";
import { initPaddle } from "@/lib/paddle/checkout";

export function PaddleLoader() {
  useEffect(() => {
    // This runs once when the app starts
    initPaddle();
  }, []);

  return null; // This component doesn't show anything, it just runs the code
}