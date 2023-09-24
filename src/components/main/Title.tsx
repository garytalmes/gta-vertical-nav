import { useEffect, useState } from "react"
import { IGeneralConfig, useAdmin } from "../"

export interface ITitleConfig extends IGeneralConfig {}

export function Title({
  viewState = "expanded",
  size = "md",
  className = "",
  children,
}: ITitleConfig) {
  const { mergeClasses, sizingClasses }: any = useAdmin()
  const [finalClasses, setFinalClasses] = useState<string>("")

  function prepClasses() {
    const base: string =
      "box-border absolute top-0 left-0 w-full py-1 px-6 flex flex-row justify-between align-center bg-green-400"
    const defaults = mergeClasses(base, sizingClasses(size, "title", viewState))
    setFinalClasses(mergeClasses(defaults, className))
  }

  useEffect(() => {
    prepClasses()
  }, [viewState])

  return <div className={finalClasses}>{children}</div>
}
