export interface INavItem {
  id: string | number
  label: string
  svg?: string
  href?: string
}

export interface INavConfig {
  useFlex?: boolean | undefined
  list?: {
    id?: string | undefined
    classes?: string | undefined
  }
  items?: {
    classes?: string | undefined
  }
  icons?: {
    classes?: string | undefined
  }
}

export interface IVerticalNav {
  items: INavItem[]
  config?: INavConfig
}

const baseConfig: any = {
  useFlex: true,
  list: {
    id: "vertical-nav-list",
  },
  items: {
    classes: "vertical-nav-item flex",
  },
  icons: {
    classes: "vertical-nav-icon",
  },
}

export const VerticalNav = ({ items, config = {}, ...rest }: IVerticalNav) => {
  const finalConfig = { ...baseConfig, ...config }
  return (
    <div {...rest}>
      <ul id={finalConfig?.list?.id}>
        {items.map((item: INavItem) => (
          <li key={item.id} className={finalConfig?.items?.classes}>
            {item.svg !== undefined && (
              <img
                className={finalConfig?.icons?.classes}
                src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`}
              />
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
