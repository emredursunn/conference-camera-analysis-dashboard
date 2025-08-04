"use client";
import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";

import { SidebarOpenContext } from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <SidebarOpenContext.Provider value={sidebarOpen}>
      <div className="w-full min-h-screen">
        <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
        <main className={`transition-all duration-300 flex-1 overflow-y-auto p-0 md:ml-0 ${sidebarOpen ? 'md:ml-[28rem]' : 'md:ml-8'}`}>{children}</main>
      </div>
    </SidebarOpenContext.Provider>
  );
}
