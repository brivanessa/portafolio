
import menu from "../assets/icons/menu-icon.svg"
import PropTypes from 'prop-types'; 
// import close from "../assets/icons/xmark-icon.svg "

export const NavBar = ({menuOptions}) => {
    return (
        <>
            <ul className="hidden sm:flex text-sm sm:text-base gap-5">
               
                    {menuOptions.map( item => 
                    {
                        return <li key={item}>
                                <a href="#">{item}</a>
                        </li>
                    })}
               
            </ul>
            <div className="py-2 sm:hidden cursor-pointer border-2 border-secundary rounded-lg ">
                <img className="w-10 h-4" src={menu} alt="menu hamburguesa"/>  
            </div>    
        
        </>
    )
  }

  NavBar.propTypes = {
    menuOptions: PropTypes.node,
  };