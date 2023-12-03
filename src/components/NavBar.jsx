
import { IconMenu } from "../assets/icons/IconMenu";
import { CloseMenu } from "../assets/icons/CloseMenu";

// import  iconMenu from "../assets/icons/menu-icon.svg";

// import xmark from "../assets/icons/xmark-icon.svg";

import PropTypes from 'prop-types'; 
import { useState } from "react";

// import close from "../assets/icons/xmark-icon.svg "
export const NavBar = ({menuOptions}) => {
    
    const [open, setOpen] = useState(false)
    return (
        <>
        <div className="w-full relative flex flex-col items-end">
            <button className={`${open===false && "hidden"}  sm:hidden`} onClick={()=> {setOpen(!open)}}>
                <IconMenu></IconMenu>
            </button>    
            <button className={`${open===true && "hidden"}   sm:hidden`} onClick={()=> {setOpen(!open)}}>
                <CloseMenu></CloseMenu> 
            </button> 

            <ul className={`${open===true && "hidden sm:flex  justify-center"} w-full   justify-center sm:justify-end flex flex-col pb-4 sm:py-0 text-sm sm:text-base  items-center sm:flex-row  gap-5`}>
                
                {menuOptions.map( item => 
                {
                    return <li key={item.name}>
                            <a href={`#${item.section}`} onClick={()=> {setOpen(!open)}} className=" hover:text-gray text-secundary dark:text-primary dark:hover:text-gray">{item.name}</a>
                    </li>
                })}
            
            </ul>
     
        </div>
       
         
        </>
    )
  }

  NavBar.propTypes = {
    menuOptions: PropTypes.node,
  };