import { useAdminCtx } from "../container/AdminContainer"

export function ResizeButton() {
  const { viewState, setViewState }: any = useAdminCtx()

  return (
    <>
      <button onClick={() => setViewState("reduced")}>R</button>
    </>
  )
}
