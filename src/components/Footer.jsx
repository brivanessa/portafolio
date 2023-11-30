import theme from "../assets/icons/theme-icon.svg"
import github from "../assets/icons/github-icon.svg"
import linkedin from "../assets/icons/linkedin-icon.svg"
import email from "../assets/icons/email-icon.svg"

export const Footer = () => {
    return (
      <footer className="bg-primary flex justify-between p-4 px-8  sm:px-20 w-full ">
            <div className=" cursor-pointer ">
                <img className="h-8 lg:h-12" src={theme} alt="menu hamburguesa"/>  
            </div>  
            <div className="flex flex-row gap-8">
                <div className=" cursor-pointer ">
                    <img className="h-8 lg:h-12" src={github} alt="menu hamburguesa"/>  
                </div>  
                <div className=" cursor-pointer ">
                    <img className="h-8 lg:h-12" src={linkedin} alt="menu hamburguesa"/>  
                </div>  
                <div className=" cursor-pointer ">
                    <img className="h-8 lg:h-12" src={email} alt="menu hamburguesa"/>  
                </div>  
            </div>
      </footer>
    )
  }