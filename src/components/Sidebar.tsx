"use client"
import { useAdminCtx } from "./AdminContainer"

export interface ISidebarIcon {
  icon: any
  viewState?: string
}
export function SidebarIcon({ icon, viewState = "normal" }: ISidebarIcon) {
  const Icon = () => icon()
  return (
    <div
      className="cursor-pointer"
      style={{ fontSize: viewState === "normal" ? "1.5rem" : "2rem" }}
    >
      <Icon />
    </div>
  )
}

export interface ISidebarItem {
  icon?: ISidebarIcon
  label?: string
  isActive?: boolean | null
}
export function SidebarItem({ icon, label = "", isActive = null }: ISidebarItem) {
  const { viewState }: any = useAdminCtx()

  return (
    <div
      data-active={isActive}
      className="w-full flex flex-row justify-start items-center gap-2 px-2 bg-transparent hover:bg-slate-700 cursor-pointer rounded-md text-[1rem] text-white data-[active]:bg-green-700"
      style={{
        paddingTop: viewState === "normal" ? ".35rem" : ".4rem",
        paddingBottom: viewState === "normal" ? ".35rem" : ".4rem",
        marginTop: viewState === "normal" ? ".35rem" : ".4rem",
        marginBottom: viewState === "normal" ? ".35rem" : ".4rem",
      }}
    >
      {icon !== undefined && <SidebarIcon viewState={viewState} icon={icon} />}
      {viewState === "normal" && label}
    </div>
  )
}

export function Sidebar({ items = [] }: { items?: ISidebarItem[] }) {
  const { viewState }: any = useAdminCtx()

  return (
    <div
      className="fixed z-20 h-full border-r border-solid border-slate-500"
      style={{
        width: viewState === "normal" ? "11rem" : "4rem",
      }}
    >
      <div className="w-full h-[3rem] flex justify-start items-center px-3 bg-slate-800 border-b border-solid border-slate-500">
        brand
      </div>

      <div
        className="flex flex-col justify-start items-start py-4"
        style={{
          paddingLeft: viewState === "normal" ? ".75rem" : ".5rem",
          paddingRight: viewState === "normal" ? ".75rem" : ".5rem",
        }}
      >
        {items.map((item: any) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
