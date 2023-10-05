"use client"

export const breakpoints: any = {
  xl: window.matchMedia("(min-width: 1401px)"),
  lg: window.matchMedia("(min-width: 941px"),
  md: window.matchMedia("(min-width: 768px)"),
  sm: window.matchMedia("(min-width: 541px)"),
  base: window.matchMedia("(min-width: 0px)"),
}

export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor)
    })
}

export function getBreakpoint(): string {
  let matched = false
  let found = ""
  Object.keys(breakpoints).forEach((key: string) => {
    if (!matched && breakpoints[key].matches) {
      console.log("breakpoint is " + key)
      found = key
      matched = true
    }
  })
  return found
}
