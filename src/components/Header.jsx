//rafce:para escribir componentes más rápido

import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="bg-primary dark:bg-blue dark:border-primary dark:border-b w-full sm:h-14 fixed z-10 flex sm:justify-end items-center p-2 sm:px-20 ">
       <NavBar 
        menuOptions={[{name:"Acerca de", section:"profile"},{name:"Proyectos", section:"projects"},{name:"Contacto",section:"contact"},{name:"Weird thing", section:"things"} ]}
       />
    </header>
  )
}

