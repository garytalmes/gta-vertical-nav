import { VerticalNav } from "./component/VerticalNav"

function App() {
  return (
    <>
      <VerticalNav
        items={[
          { id: 10, label: "Test 1", href: "http://google.com" },
          { id: 20, label: "Test 2", href: "http://yahoo.com" },
          { id: 30, label: "Test 3", href: "http://facebook.com" },
        ]}
      />
    </>
  )
}

export default App
