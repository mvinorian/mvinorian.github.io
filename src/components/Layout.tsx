import React, { ReactNode } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-primary flex flex-col justify-start items-center w-full min-h-screen overflow-hidden">
      <div className="xl:max-w-screen-2xl w-full relative">
        <div className="bg-primary fixed md:px-28 sm:px-16 px-8 py-4 z-50 w-screen max-w-screen-2xl">
          <Navbar />
        </div>

        <div className="bg-transparent md:px-28 sm:px-16 px-8 pt-16 pb-4 w-full relative z-10">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}
