import { useEffect, useState } from "react"
import { IGeneralConfig, useAdmin } from "../"

export interface IMainConfig extends IGeneralConfig {}

export function Main({
  viewState = "expanded",
  size = "md",
  className = "",
  children,
}: IMainConfig) {
  const { mergeClasses, sizingClasses }: any = useAdmin()
  const [finalClasses, setFinalClasses] = useState<string>("")

  function prepClasses() {
    const base: string = "box-border relative top-0 bg-slate-300 px-6 pt-10"
    const defaults = mergeClasses(base, sizingClasses(size, "main", viewState))
    setFinalClasses(mergeClasses(defaults, className))
  }

  useEffect(() => {
    prepClasses()
  }, [viewState])

  return <div className={finalClasses}>{children}</div>
}
