// lib/paddle/checkout.js

const PADDLE_CLIENT_TOKEN = "test_52ff51b791c437ac1dfdf370370"

// Your Sandbox Price IDs
export const PADDLE_PRICES = {
  pro_1_month: "pri_01kk6wm7mzvsgt42s0tghm9v4k",
  pro_6_month: "pri_01kk6wnpa1vp7mrz27sjscr12c",
  pro_annual:  "pri_01kk6wq3xef4z2t77e144xs5s9"
};

let isPaddleLoaded = false;

export function initPaddle() {
  if (typeof window === "undefined") return;

  if (!window.Paddle) {
    console.warn("[Paddle] Script not found, retrying...");
    setTimeout(initPaddle, 500);
    return;
  }

  if (isPaddleLoaded) return;

  try {
    window.Paddle.Environment.set("sandbox");
    window.Paddle.Initialize({
      token: PADDLE_CLIENT_TOKEN,
      eventCallback(event) {
        console.log("[Paddle Event]:", event.name, event);
        if (event.name === "checkout.completed") {
          window.location.href = "/dashboard";
        }
      },
    });
    isPaddleLoaded = true;
    console.log("[Paddle] Initialized successfully ✓");
  } catch (e) {
    console.error("[Paddle] Initialization error:", e);
  }
}

export function initPaddleCheckout(priceId) {
  console.log("------------------------------------");
  console.log("🚀 CHECKOUT ATTEMPT");
  console.log("👉 Price ID received:", priceId);
  console.log("👉 Data Type:", typeof priceId);
  console.log("------------------------------------");

  if (typeof window === "undefined" || !window.Paddle) {
    console.error("❌ Paddle not ready");
    return;
  }

  if (!priceId || typeof priceId !== 'string') {
    console.error("❌ INVALID PRICE ID: Checkout aborted to prevent 400 error.");
    return;
  }

  window.Paddle.Checkout.open({
    items: [{ priceId: priceId, quantity: 1 }],
    settings: {
      displayMode: "overlay",
      theme: "dark",
    },
  });
}