import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as LucideIcons from 'lucide-react';
import React from "react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const renderIcon = (iconName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent ? React.createElement(IconComponent) : null;
};
