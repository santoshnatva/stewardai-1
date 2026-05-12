"use client";

import { useUser, UserButton } from "@clerk/nextjs";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#0f1e3c] text-white px-8 py-4 flex items-center justify-between shadow-md">
        <span className="text-lg font-bold tracking-tight">StewArdAI</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-blue-200">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
