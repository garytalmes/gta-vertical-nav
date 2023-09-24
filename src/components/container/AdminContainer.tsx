import { createContext, useContext, useEffect, useState } from "react"
import { Main, ResizeButton, Sidebar, SidebarNav, Title, Topbar, useAdmin } from "../"

export interface IGeneralConfig {
  size?: string
  viewState?: string
  setViewState?: any
  className?: string
  children?: React.ReactNode
}

export const withCtx = (WrappedComponent: any) => (props: any) => {
  const { size, viewState, setViewState }: any = useAdminCtx()
  const elemSettings: any = {
    size,
    viewState,
    setViewState,
  }
  return <WrappedComponent {...props} {...elemSettings} />
}

const AdminContext = createContext({})
export const useAdminCtx = () => useContext(AdminContext)

export const AdminMain = withCtx(Main)
export const AdminSidebar = withCtx(Sidebar)
export const AdminSidebarNav = withCtx(SidebarNav)
export const AdminTopbar = withCtx(Topbar)
export const AdminResize = withCtx(ResizeButton)
export const AdminTitle = withCtx(Title)

export function AdminContainer({ size = "md", children }: IGeneralConfig) {
  const { breakpoint }: any = useAdmin()
  const [viewState, setViewState] = useState<string>("expanded")

  useEffect(() => {
    console.log(breakpoint)
  }, [breakpoint])

  return (
    <AdminContext.Provider value={{ size, viewState, setViewState }}>
      {children}
    </AdminContext.Provider>
  )
}
