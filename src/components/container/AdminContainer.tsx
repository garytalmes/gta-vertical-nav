import { createContext, useContext, useEffect, useState } from "react"
import { Sidebar, Topbar, useAdmin } from "../"

/*
  If AdminContainer is used then general config settings must be passed into it; 
  individual components can either get their settings from context, or from having 
  them passed in as props.

  If AdminContainer is not used, then all components are standalones, and all settings 
  must be passed in as props.


*/

export interface IGeneralConfig {
  viewState: string
  allowReduced: boolean
  allowCollapsed: boolean
  allowDarkMode: boolean
  scheme?: string
  children?: React.ReactNode
}

export const withCtx = (WrappedComponent: any, element: string) => (props: any) => {
  const { settings }: any = useAdminCtx()
  const elemSettings: any = {
    settings: settings[element],
    viewState: settings.viewState,
    allowReduced: settings.allowReduced,
    allowCollapsed: settings.allowCollapsed,
    scheme: settings.scheme,
  }
  return <WrappedComponent {...props} settings={elemSettings} />
}

const AdminContext = createContext({})
export const useAdminCtx = () => useContext(AdminContext)

export const AdminSidebar = withCtx(Sidebar, "sidebar")
export const AdminTopbar = withCtx(Topbar, "topbar")

export function AdminContainer({
  viewState = "expanded",
  allowReduced = true,
  allowCollapsed = true,
  allowDarkMode = true,
  scheme = "",
  children,
}: IGeneralConfig) {
  const { breakpoint }: any = useAdmin()
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    if (!settings) {
      setSettings({
        viewState,
        allowReduced,
        allowCollapsed,
        allowDarkMode,
        scheme,
      })
    }
  }, [viewState, allowReduced, allowCollapsed, allowDarkMode, scheme])

  useEffect(() => {
    console.log(breakpoint)
  }, [breakpoint])

  if (!breakpoint.length) return <></>
  return <AdminContext.Provider value={{ settings, setSettings }}>{children}</AdminContext.Provider>
}
