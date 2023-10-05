import { createContext, useContext, useEffect, useState } from "react"
import { breakpoints, getBreakpoint } from "../utils"

export interface IContainerConfig {
  settings?: any
  children?: React.ReactNode
}

const AdminContext = createContext({})
export const useAdminCtx = () => useContext(AdminContext)

export function AdminContainer({ settings = {}, children }: IContainerConfig) {
  const [breakpoint, setBreakpoint] = useState<string>("")
  const [viewState, setViewState] = useState<string>("")

  function handleKeyDown(e: any) {
    const states: any = { normal: "maximized", maximized: "normal" }
    if (e.key === "/" && e.ctrlKey && viewState) {
      setViewState((viewState: string) => states[viewState])
    }
  }

  // get the current breakpoint
  useEffect(() => {
    if (viewState) {
      const handleResize = () => {
        const bp = getBreakpoint()
        setBreakpoint(bp)
      }

      if (!breakpoint) {
        handleResize()
      }

      window.addEventListener("resize", handleResize)
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [window, viewState])

  useEffect(() => {
    if (!viewState.length) {
      setViewState("normal")
    }
  }, [viewState])

  if (!breakpoint || !viewState) return <></>
  return (
    <AdminContext.Provider value={{ settings, breakpoint, breakpoints, viewState, setViewState }}>
      <div className="w-screen h-screen bg-gray-900 overflow-x-hidden">{children}</div>
    </AdminContext.Provider>
  )
}
