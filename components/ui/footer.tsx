"use client";

import * as React from "react";

export const Footer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <footer className={`border-t bg-background ${className}`}>{children}</footer>
);

export const FooterContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`container mx-auto px-4 py-12 ${className}`}>{children}</div>
);

export const FooterColumn = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
);

export const FooterBottom = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-12 pt-8 border-t ${className}`}>{children}</div>
);