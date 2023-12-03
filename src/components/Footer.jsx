
import {IconEmail} from "../assets/icons/IconEmail"
import {IconGithub} from "../assets/icons/IconGithub"
import {IconLinkedin} from "../assets/icons/IconLinkedin"
import {IconTheme} from "../assets/icons/IconTheme"
import {useEffect, useState} from "react"

export const Footer = () => {
    const [theme, setTheme] = useState("light")
    useEffect(()=>{
        if(theme==="dark") {
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    })
    const handleChangeTheme =() => {
        setTheme(theme ==="light" ? "dark":"light")
    }
    return (
      <footer className="bg-primary flex justify-between py-4 px-8  sm:px-20 w-full dark:bg-blue dark:border-primary dark:border-t ">
            <button className=" cursor-pointer hover:scale-105 " onClick={handleChangeTheme }>
                <IconTheme/> 
            </button>  
            <div className="flex flex-row gap-4 sm:gap-8">
                <a href="https://github.com/brivanessa" className=" cursor-pointer hover:scale-105 ">
                    <IconGithub/>
                </a>  
                <a href="https://www.linkedin.com/in/vanessaarapa/" className=" cursor-pointer hover:scale-105 ">
                   <IconLinkedin/>
                </a>  
                <a href="mailto:vanessaah.lu@gmail.com" className="cursor-pointer hover:scale-105">
                    <IconEmail/>
                </a>  
            </div>
      </footer>
    )
  }