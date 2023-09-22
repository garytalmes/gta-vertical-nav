export interface INavItem {
  id: string | number
  label: string
  svg?: string
  href?: string
}

export interface IVerticalNav {
  items: INavItem[]
}

export const VerticalNav = ({ items }: IVerticalNav) => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {items.map((item: INavItem) => (
          <li
            key={item.id}
            style={{ padding: "1px 3px", fontSize: ".95rem", backgroundColor: "transparent" }}
          >
            <a href={item.href || "#"} style={{ textDecoration: "none" }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
