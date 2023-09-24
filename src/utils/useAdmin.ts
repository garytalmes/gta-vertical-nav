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

  const sizings: any = {
    sm: {},
    md: {
      topbar: {
        expanded: "h-[2.5rem]",
        reduced: "h-[1rem]",
        collapsed: "h-0 hidden",
      },
      sidebar: {
        expanded: "w-[11rem] top-[2.5rem]",
        reduced: "w-[3rem] top-[1rem] justify-center",
        collapsed: "w-0 hidden",
      },
      sidebarnav: {
        expanded: "",
        reduced: "",
        collapsed: "hidden",
      },
      sidebarnavitem: {
        expanded: "text-[1.2rem]",
        reduced: "",
        collapsed: "hidden",
      },
      sidebarnavicon: {
        expanded: "w-[1.95rem] h-[1.35rem]",
        reduced: "",
        collapsed: "",
      },
      main: {
        expanded: "left-[11rem] h-[calc(100vh-2.5rem)] w-[calc(100vw-11rem)]",
        reduced: "left-[3rem] w-[calc(100vw-3rem)] h-[calc(100vh-1rem)]",
        collapsed: "h-screen",
      },
      title: {
        expanded: "",
        reduced: "",
        collapsed: "hidden",
      },
    },
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

  const mergeClasses = (def: string, custom: string) => {
    if (!custom?.length) return def
    return [...def.split(" "), ...custom.split(" ")].join(" ")
  }

  const sizingClasses = (size: string, elem: string, viewState: string) => {
    return sizings[size][elem][viewState]
  }

  useEffect(() => {
    if (!breakpoint.length) getBreakpoint()
    window.addEventListener("resize", getBreakpoint)
  }, [window])

  return {
    breakpoint,
    mergeClasses,
    sizingClasses,
  }
}
