import { useState, useEffect } from "react"

export function useAdmin() {
  const [breakpoint, setBreakpoint] = useState<string>("")

  const breakpoints: any = {
    xl: window.matchMedia("(min-width: 1401px)"),
    lg: window.matchMedia("(min-width: 941px && max-width: 1140px)"),
    md: window.matchMedia("(min-width: 768px)"),
    sm: window.matchMedia("(min-width: 541px)"),
    base: window.matchMedia("(min-width: 0px)"),
  }

  const getBreakpoint = () => {
    let matched = false
    Object.keys(breakpoints).forEach((key: string) => {
      if (!matched && breakpoints[key].matches) {
        console.log("breakpoint is " + key)
        setBreakpoint(key)
        matched = true
      }
    })
  }

  useEffect(() => {
    if (!breakpoint.length) getBreakpoint()
    window.addEventListener("resize", getBreakpoint)
  }, [window])

  return {
    breakpoint,
  }
}
