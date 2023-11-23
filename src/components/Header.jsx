//rafce:para escribir componentes más rápido
import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="bg-primary flex justify-end p-2  sm:px-20 ">
       <NavBar
        menuOptions={["Acerca de","Proyectos","Contacto","Weird thing" ]}
       />
    </header>
  )
}

