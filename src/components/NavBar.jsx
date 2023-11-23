import menu from "../assets/icons/menu-icon.svg"
// import close from "../assets/icons/xmark-icon.svg "
export const NavBar = () => {
    return (
        <>
            <ul className="hidden sm:flex text-xl sm:text-2xl gap-5">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Proyectos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <a href="#">Weird things</a>
                </li>
            </ul>
        <div className="py-2 sm:hidden cursor-pointer border-2 border-secundary rounded-lg ">
        <img className="w-10 h-4" src={menu} alt="menu hamburguesa"/>  
        </div>    
       
        </>
    )
  }