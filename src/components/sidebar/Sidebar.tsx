import { useEffect, useState } from "react"
import { IGeneralConfig, useAdmin } from "../"

export interface ISidebarConfig extends IGeneralConfig {
  children?: React.ReactNode
}

export function Sidebar({
  viewState = "expanded",
  size = "md",
  setViewState = () => {},
  className = "",
  children,
  ...rest
}: ISidebarConfig) {
  const { breakpoint, sizingClasses, mergeClasses }: any = useAdmin()
  const [finalClasses, setFinalClasses] = useState<string>("")

  function prepClasses() {
    const base: string = "box-border fixed h-full flex flex-column justify-start items-start"
    const defaults = mergeClasses(base, sizingClasses(size, "sidebar", viewState))
    setFinalClasses(mergeClasses(defaults, className))
  }

  useEffect(() => {
    prepClasses()
  }, [viewState])

  return (
    <div className={finalClasses} {...rest}>
      {children}
    </div>
  )
}
