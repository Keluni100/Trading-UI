// lib/paddle/checkout.js

const PADDLE_CLIENT_TOKEN = "test_52ff51b791c437ac1dfdf370370"

// Your Sandbox Price IDs
export const PADDLE_PRICES = {
  pro_1_month: "pri_01kk6wm7mzvsgt42s0tghm9v4k",
  pro_6_month: "pri_01kk6wnpa1vp7mrz27sjscr12c",
  pro_annual:  "pri_01kk6wq3xef4z2t77e144xs5s9"
};


// We use this local variable because window.Paddle.Initialized is read-only
let isPaddleLoaded = false;

export function initPaddle() {
  if (typeof window === "undefined") return;

  // 1. If script isn't ready yet, wait and retry
  if (!window.Paddle) {
    console.warn("[Paddle] window.Paddle not found. Retrying in 500ms...");
    setTimeout(initPaddle, 500);
    return;
  }

  // 2. Use our local flag to prevent double-initialization
  if (isPaddleLoaded) {
    console.log("[Paddle] Already initialized locally, skipping.");
    return;
  }

  try {
    console.log("[Paddle] Setting environment to sandbox...");
    window.Paddle.Environment.set("sandbox");

    window.Paddle.Initialize({
      token: PADDLE_CLIENT_TOKEN,
      eventCallback(event) {
        console.log("[Paddle] Event:", event.name, event);
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
  if (typeof window === "undefined" || !window.Paddle) {
    console.error("[Paddle] Cannot open checkout: Paddle not ready.");
    return;
  }

  console.log("[Paddle] Opening checkout with priceId:", priceId);

  window.Paddle.Checkout.open({
    items: [{ priceId: priceId, quantity: 1 }],
    settings: {
      displayMode: "overlay",
      theme: "dark",
    },
  });
}

export async function checkSubscription() { return { hasSubscription: false }; }
export async function getSubscriptionUrls() { return null; }