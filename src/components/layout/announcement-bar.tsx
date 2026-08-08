"use client";

import { cn } from "@/lib/utils";

export interface AnnouncementBarProps {
  children: React.ReactNode;
  className?: string;
}

export function AnnouncementBar({ children, className }: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "bg-white font-light h-[48px] w-full px-4 sticky top-0 z-[60] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="max-w-[1410px] w-full flex items-center justify-center">
        <p className="min-h-6 text-center lg:text-left text-[12px] sm:text-[14px] text-black flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
          {children}
        </p>
      </div>
    </div>
  );
}
