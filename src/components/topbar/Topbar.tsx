import type { IGeneralConfig } from "../"

export interface ITopbarConfig extends IGeneralConfig {
  height: string | number
}

export function Topbar({
  viewState = "expanded",
  allowReduced = true,
  allowCollapsed = true,
  allowDarkMode = true,
  height,
}: ITopbarConfig) {
  return (
    <div
      className="topbar"
      style={{
        height: height || undefined,
      }}
    ></div>
  )
}
