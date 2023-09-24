import { useEffect, useState } from "react"
import { useAdminCtx } from "../container/AdminContainer"
import { IGeneralConfig, useAdmin } from ".."

export interface ISidebarNav extends IGeneralConfig {
  items?: ISidebarNavItem[]
  className?: string
  children?: React.ReactNode
}

export interface ISidebarNavItem {
  id: string | number
  label: string
  icon?: ISidebarNavIcon
  href?: any
  active?: boolean
  classNames?: string
  subitems?: ISidebarNavItem[]
}

export interface ISidebarNavIcon {
  svg: any
  classNames?: string
}

export function SidebarNav({
  items = [],
  viewState = "expanded",
  size = "md",
  className = "",
  ...rest
}: ISidebarNav) {
  const { breakpoint, sizingClasses, mergeClasses }: any = useAdmin()

  const [containerClasses, setContainerClasses] = useState<string>("")
  const [itemClasses, setItemClasses] = useState<string>("")

  function prepClasses() {
    const containerBase: string = "box-border flex flex-column justify-start items-start"
    const containerDefs = mergeClasses(containerBase, sizingClasses(size, "sidebarnav", viewState))
    setContainerClasses(mergeClasses(containerDefs, className))
  }

  function getItemClasses(item: ISidebarNavItem) {
    const itemBase: string = "px-3 py-1 flex flex-row justify-start items-center gap-[.75rem]"
    const itemDefs = mergeClasses(itemBase, sizingClasses(size, "sidebarnavitem", viewState))
    return mergeClasses(itemDefs, item.classNames || "")
  }

  function getIconClasses(icon: ISidebarNavIcon) {
    const itemBase: string = "stroke-0"
    const itemDefs = mergeClasses(itemBase, sizingClasses(size, "sidebarnavicon", viewState))
    return mergeClasses(itemDefs, icon.classNames || "")
  }

  useEffect(() => {
    prepClasses()
  }, [viewState])

  return (
    <div className={containerClasses}>
      <ul>
        {items.map((item: ISidebarNavItem) => (
          <li key={item.id} className={getItemClasses(item)}>
            {item.icon?.svg !== undefined && (
              <item.icon.svg className={getIconClasses(item.icon)} />
            )}
            <a href={item.href || "#"} style={{ textDecoration: "none" }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
