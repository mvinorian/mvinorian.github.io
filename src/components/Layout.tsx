import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-primary flex flex-col justify-start items-center md:px-28 sm:px-16 px-8 py-4 min-h-screen">
      <div className="xl:max-w-[1920px] w-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
