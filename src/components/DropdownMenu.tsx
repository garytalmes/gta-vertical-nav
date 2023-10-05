import React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { DotFilledIcon } from "@radix-ui/react-icons"

export interface IDropdownRadioItem extends IDropdownItem {
  value?: string
  setValue?: any
  selected?: boolean
}
export function DropdownRadioItem({
  id = "",
  label = "",
  value = "",
  selected = false,
}: IDropdownRadioItem) {
  return (
    <DropdownMenuPrimitive.RadioItem
      id={id}
      className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-slate-400"
      value={value}
    >
      <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        {selected === true && <DotFilledIcon />}
      </DropdownMenuPrimitive.ItemIndicator>
      {label}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export function DropDownItemWrapper({
  href = "",
  target = "_self",
  callback,
  children,
  ...rest
}: {
  href?: string
  target?: string
  callback?: any
  children: React.ReactNode
}) {
  function handleCallback() {
    if (!callback) return null
    return (item: any) => callback(item)
  }

  if (href.length)
    return (
      <a href={href} target={target} rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )

  return (
    <span onClick={handleCallback} {...rest}>
      {children}
    </span>
  )
}

export interface IDropdownItem {
  id?: string
  type?: string
  label?: string
  href?: string
  target?: string
  callback?: any
  options?: IDropdownRadioItem[]
  keyCommand?: string
}
export function DropdownItem({
  label = "",
  href,
  target = "_self",
  callback,
  keyCommand = undefined,
}: IDropdownItem) {
  return (
    <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-slate-400">
      <DropDownItemWrapper href={href} target={target} callback={callback}>
        {label}{" "}
        {keyCommand !== undefined && (
          <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
            {keyCommand}
          </div>
        )}
      </DropDownItemWrapper>
    </DropdownMenuPrimitive.Item>
  )
}

export interface IDropdownMenu {
  minW?: string
  sideOffset?: number
  align?: "center" | "start" | "end" | undefined
  alignOffset?: number
  items?: any[]
  children?: React.ReactNode
}
export function DropdownMenu({
  minW = "120px",
  sideOffset,
  align,
  alignOffset,
  items = [],
  children,
}: IDropdownMenu) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{children}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          style={{ minWidth: minW }}
        >
          {items.map((item: any) => (
            <React.Fragment key={item.id}>
              {item.type === "link" && <DropdownItem label={item.label} href={item.href} />}
              {item.type === "separator" && (
                <DropdownMenuPrimitive.Separator className="h-[1px] bg-slate-200 m-[5px]" />
              )}
              {item.type === "radio" && (
                <React.Fragment>
                  <DropdownMenuPrimitive.Label className="pl-[25px] text-xs leading-[25px] text-slate-500 pointer-events-none">
                    {item.label}
                  </DropdownMenuPrimitive.Label>
                  <DropdownMenuPrimitive.RadioGroup
                    value={item.value}
                    onValueChange={item.setValue}
                  >
                    {item.options.map((option: IDropdownRadioItem) => (
                      <DropdownRadioItem
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        selected={item.value === option.value}
                      />
                    ))}
                  </DropdownMenuPrimitive.RadioGroup>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}

          <DropdownMenuPrimitive.Arrow className="fill-white" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
