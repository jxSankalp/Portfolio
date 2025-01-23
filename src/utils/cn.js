import { clsx } from "clsx"; // Importing clsx without type annotations
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
