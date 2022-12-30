import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-primary w-full min-h-screen overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
