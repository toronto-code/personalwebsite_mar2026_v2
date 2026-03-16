"use client";

import { ReactNode } from "react";
import { ChromeCursor } from "./ChromeCursor";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

interface ChromeLayoutProps {
  children: ReactNode;
}

export function ChromeLayout({ children }: ChromeLayoutProps) {
  return (
    <div className="relative min-h-screen text-base-ink">
      <ChromeCursor />
      <NavBar />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
    </div>
  );
}

