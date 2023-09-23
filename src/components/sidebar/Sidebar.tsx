import { IGeneralConfig, useAdmin } from "../"

export interface ISidebarConfig extends IGeneralConfig {
  expanded?: string | number
  reduced?: string | number
  offsetTop?: string | number
  children?: React.ReactNode
}

export function Sidebar({
  viewState = "expanded",
  allowReduced = true,
  allowCollapsed = true,
  allowDarkMode = true,
  expanded = "12rem",
  reduced = "4rem",
  offsetTop = "2.5rem",
  children,
  ...rest
}: ISidebarConfig) {
  const { breakpoint }: any = useAdmin()

  return (
    <div
      style={{
        display: breakpoint === "base" ? "none" : "block",
        position: "fixed",
        top: offsetTop || 0,
        left: 0,
        height: "100%",
        width: viewState === "expanded" ? expanded : viewState === "reduced" ? reduced : 0,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
