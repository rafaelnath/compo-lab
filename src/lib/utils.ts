import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Notes:
 * clsx & twMerge is [...].join(" ") on steroid
 * clsx: combine classNames safely (ignore falsy values) and intelligently (accepts: arrays/objects/combined)
 * twMerge: resolve redundant or conflicting classNames
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}