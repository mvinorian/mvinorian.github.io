import React, { ReactNode } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <div className="flex flex-col justify-between items-center xl:max-w-screen-2xl w-full min-h-screen relative">
        <div className="bg-primary fixed md:px-28 sm:px-16 px-8 py-4 z-50 w-screen max-w-screen-2xl">
          <Navbar />
        </div>

        <div className="flex-1 bg-transparent md:px-28 sm:px-16 px-8 pt-16 w-full relative z-10">
          {children}
        </div>

        <div className="bg-transparent md:px-28 sm:px-16 px-8 pt-64 pb-4 w-full relative z-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}
