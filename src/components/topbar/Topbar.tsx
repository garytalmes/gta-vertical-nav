import { useEffect, useState } from "react"
import { IGeneralConfig, useAdmin } from "../"

export interface ITopbarConfig extends IGeneralConfig {}

export function Topbar({
  viewState = "expanded",
  size = "md",
  className = "",
  children,
}: ITopbarConfig) {
  const { mergeClasses, sizingClasses }: any = useAdmin()
  const [finalClasses, setFinalClasses] = useState<string>("")

  function prepClasses() {
    const base: string =
      "box-border h-10 flex flex-row justify-between items-center px-8 bg-slate-500"
    const defaults = mergeClasses(base, sizingClasses(size, "topbar", viewState))
    setFinalClasses(mergeClasses(defaults, className))
  }

  useEffect(() => {
    prepClasses()
  }, [viewState])

  return <div className={finalClasses}>{children}</div>
}
