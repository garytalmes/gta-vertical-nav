import { useAdminCtx } from "./AdminContainer"
import { IDropdownItem, DropdownMenu } from "../components"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export interface IMainConfig {
  title?: string
  dropdownItems?: IDropdownItem[]
  children: React.ReactNode
}

export function Main({
  title = "",
  dropdownItems = [],
  children,
}: {
  title?: string
  dropdownItems?: IDropdownItem[]
  children: React.ReactNode
}) {
  const { viewState }: any = useAdminCtx()

  return (
    <div
      className="relative"
      style={{
        left: viewState === "normal" ? "11rem" : "4rem",
      }}
    >
      <div
        className="h-[3rem] fixed bg-slate-800 border-b border-solid border-slate-500"
        style={{
          width: viewState === "normal" ? "calc(100vw - 11rem)" : "calc(100vw - 4rem)",
        }}
      >
        <div className="w-full h-full flex flex-row justify-between items-center pl-8 pr-12 text-white">
          <h1 className="uppercase tracking-wider">{title}</h1>
          <div>
            <DropdownMenu
              minW="130px"
              sideOffset={5}
              align="end"
              alignOffset={-20}
              items={dropdownItems}
            >
              <button
                className="rounded-full w-[30px] h-[30px] inline-flex items-center justify-center text-violet11 bg-white outline-none hover:bg-violet3"
                aria-label="Customise options"
              >
                <HamburgerMenuIcon />
              </button>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div
        className="relative px-8 py-4 top-12 text-slate-300"
        style={{
          width: viewState === "normal" ? "calc(100vw - 11rem)" : "calc(100vw - 4rem)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
