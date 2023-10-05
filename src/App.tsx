import { useState } from "react"
import { IDropdownItem, IDropdownRadioItem, AdminContainer, Main, Sidebar } from "./components"
import { HiCube } from "react-icons/hi"
import "./index.css"

function App() {
  const [language, setLanguage] = useState<string>("en")

  const dropdownItems: IDropdownItem | IDropdownRadioItem[] = [
    { id: "alpha", type: "link", label: "My Profile", href: "/profile" },
    { id: "beta", type: "link", label: "My Account", href: "/account" },
    { id: "delta", type: "separator" },
    {
      id: "gamma",
      type: "radio",
      label: "Language",
      value: language,
      setValue: setLanguage,
      options: [
        { value: "en", label: "English", selected: language === "en" },
        { value: "es", label: "Spanish", selected: language === "es" },
      ],
    },
    { id: "io", type: "separator" },
    { id: "theta", type: "link", label: "Logout", href: "/logout" },
  ]

  const sidebarItems: any[] = [
    { id: "alpha", label: "Item 1", icon: HiCube, isActive: null },
    { id: "beta", label: "Item 2", icon: HiCube, isActive: null },
    { id: "gamma", label: "Item3", icon: HiCube, isActive: null },
    { id: "delta", label: "Item4", icon: HiCube, isActive: null },
  ]

  return (
    <AdminContainer>
      <Sidebar items={sidebarItems} />
      <Main title="Title Here" dropdownItems={dropdownItems}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero velit deserunt
          eligendi repudiandae eum, culpa doloribus suscipit consequatur provident totam ad!
          Reiciendis iste, a commodi minus rem alias tenetur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Enim, vero velit deserunt eligendi repudiandae eum, culpa
          doloribus suscipit consequatur provident totam ad! Reiciendis iste, a commodi minus rem
          alias tenetur?
        </p>
      </Main>
    </AdminContainer>
  )
}

export default App
