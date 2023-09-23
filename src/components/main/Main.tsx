import type { IGeneralConfig } from "../"

export interface IMainConfig extends IGeneralConfig {
  offsetLeft: {
    expanded: "10rem"
    reduced: "4rem"
  }
  offsetTop: {
    expanded: "2.5rem"
    collapsed: 0
  }
}

export function Main({ settings, children }: { settings: any; children: React.ReactNode }) {
  return <div style={{}}>{children}</div>
}
