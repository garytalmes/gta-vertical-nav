"use client"
import { useEffect, useState } from "react"
import classNames from "classnames"
import { useAdminCtx } from "./AdminContainer"

export function DynamicTag({
  tagname = "div",
  className = "",
  style = {},
  children,
  ...rest
}: {
  tagname?: string
  className?: string
  style?: any
  children?: React.ReactNode
}) {
  if (tagname === "li")
    return (
      <li className={className} style={style} {...rest}>
        {children}
      </li>
    )
  if (tagname === "span")
    return (
      <span className={className} style={style} {...rest}>
        {children}
      </span>
    )
  return (
    <div className={className} style={style} {...rest}>
      {children}
    </div>
  )
}

export function DynamicBox({
  name = "",
  tagname = "div",
  className = "relative",
  children,
  ...rest
}: {
  name: string
  tagname?: string
  className?: string
  children: React.ReactNode
}) {
  const { breakpoint, settings, viewState }: any = useAdminCtx()
  const [styleObj, setStyleObj] = useState<any>(null)

  function getStyleObjValues(offsets: any, hidden: string[]) {
    const topVal = offsets?.topbar || "0rem"
    const sideVal = offsets?.sidebar || "0rem"

    if (hidden.includes(name)) return { display: "none" }

    switch (name) {
      case "topbar":
        return { height: settings.states[viewState].topbar }

      case "main":
        return {
          top: topVal || 0,
          height: `calc(100vh - ${topVal})`,
          left: sideVal,
          width: `calc(100vw - ${sideVal})`,
        }

      case "sidebar":
        return { top: topVal, width: sideVal, height: `calc(100vh - ${topVal})` }

      case "content":
        return {}

      default:
        return {}
    }
  }

  function applyStyles() {
    const offsets: any = settings.states[viewState]?.offsets || {}
    const hidden: string[] = settings.states[viewState]?.hidden || []

    if (settings.styleFuncs && settings.styleFuncs?.[name][viewState]) {
      setStyleObj(settings.styleFuncs[name][viewState]())
    } else {
      const obj = getStyleObjValues(offsets, hidden)
      // if( name === "main" ) console.log(obj)
      setStyleObj(obj)
    }
  }

  useEffect(() => {
    // if( process.env.NODE_ENV !== "production" ) console.log(`bp: ${breakpoint} | vs: ${viewState}`)
    applyStyles()
  }, [breakpoint, viewState, settings])

  if (!styleObj) return <></>
  return (
    <DynamicTag
      tagname={tagname}
      className={classNames(settings.baseClasses[name] || "", className)}
      style={styleObj}
      {...rest}
    >
      {children}
    </DynamicTag>
  )
}
