"use client";

import { useState, ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [displayBanner, setDisplayBanner] = useState(true);

  return (
    <>
      <div className="flex bg-neutral-200 dark:bg-neutral-950">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className={`relative flex flex-1 flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-72.5" : "ml-0"}`}>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 min-h-screen">
              {children}
            </div>
          </main>

          <Footer/>
        </div>
      </div>
    </>
  );
}
