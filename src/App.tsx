import {
  AdminContainer,
  AdminMain,
  AdminSidebar,
  AdminSidebarNav,
  AdminTitle,
  AdminTopbar,
  ResizeButton,
} from "./components"
import { HiCube } from "react-icons/hi"
import "./index.css"

function App() {
  return (
    <AdminContainer size="md">
      <AdminTopbar>
        <ResizeButton />
      </AdminTopbar>

      <AdminSidebar className="bg-slate-500">
        <AdminSidebarNav
          items={[
            {
              id: "alpha-100",
              label: "Item 1",
              href: "/item1",
              classNames: "text-red-500",
              icon: { svg: (props: any) => <HiCube {...props} />, classNames: "" },
            },
          ]}
        />
      </AdminSidebar>

      <AdminMain>
        <AdminTitle>
          <h1>Hello World</h1>
          <p>something else</p>
        </AdminTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor
          est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis
          dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit
          assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor
          est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis
          dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit
          assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor
          est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis
          dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit
          assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor
          est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis
          dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit
          assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!
        </p>
      </AdminMain>

      {/* <AdminSidebar>
          <VerticalNav
            items={[
              { id: 10, label: "Test 1", href: "http://google.com", svg },
              { id: 20, label: "Test 2", href: "http://yahoo.com", svg },
              { id: 30, label: "Test 3", href: "http://facebook.com", svg },
            ]}
          />
        </AdminSidebar>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit hic vitae dolor est facilis reprehenderit quod? Error est odit assumenda ipsum maxime aut, veritatis dolore nemo possimus voluptate illo!</p>
        </div> */}
    </AdminContainer>
  )
}

export default App
