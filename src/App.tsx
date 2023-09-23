import { VerticalNav } from "./component/VerticalNav"

const svg: string = `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><polygon class="a" points="40.86 14.3 23.89 4.5 7.03 14.23 24 24.03 40.86 14.3"></polygon><polygon class="a" points="24 24.03 7.03 14.23 7.03 33.7 24 43.5 24 24.03"></polygon><polygon class="a" points="40.86 14.3 24 24.03 24 43.5 40.86 33.77 40.86 14.3"></polygon></g></svg>
`

function App() {
  return (
    <>
      <VerticalNav
        items={[
          { id: 10, label: "Test 1", href: "http://google.com", svg },
          { id: 20, label: "Test 2", href: "http://yahoo.com", svg },
          { id: 30, label: "Test 3", href: "http://facebook.com", svg },
        ]}
      />
    </>
  )
}

export default App
