import imageMobile from "../assets/images/bg-mobile.png"
import imageDesktop from "../assets/images/bg-desktop.png"
import avatar  from "../assets/images/avatar-image.png"

export const About = () => {
    return (
    <section className="profile flex flex-col justify-center scroll-mt-14" id="profile" >
    
        <div className="relative flex flex-col items-center mt-14 justify-center">
          <picture className="absolute h-fit w-fit bg-primary  opacity-80 dark:bg-blue">
            <source media="(max-width: 640px)" srcSet={imageMobile}/>
            <source media="(min-width: 641px)" srcSet={imageDesktop}/>
            <img src={imageMobile} alt="background image" className=" opacity-20 object-cover h-[250px] sm:h-[380px] w-screen" />
          </picture>
          <div className="relative flex items-center justify-center h-[250px] sm:h-[380px] w-screen ">
              <div className="flex flex-col items-center rounded-lg border w-fit px-5 py-3 border-secundary dark:border-primary dark:text-primary">
                <h1 className="text-xl sm:text-2xl">
                  Vanessa A.
                </h1>
                <p className="text-base sm:text-xl ">
                  Junior Developer
                </p>
              </div>
          </div>
          <div className="absolute -bottom-12 sm:-bottom-20 rounded-full w-fit h-fit border-secundary border">
            <img src={avatar} alt="background image" className=" rounded-full h-24 sm:h-48 w-auto" />
          </div>
         
        </div>
        <div className=" pt-14 sm:pt-24  flex flex-col items-center w-full px-2 sm:px-20  pb-6 sm:pb-16  dark:bg-blue">
                <h2 className="text-xl sm:text-2xl pb-2 sm:pb-3 text-primary">
                ¿Qué hago?
                </h2>
                <p className="text-sm sm:text-base  text-center text-tertiary ">
                  Desarrollo <a href="#projects" className="text-secundary hover:bg-primary inline hover:text-gray hover:pb-1 hover:px-0.5 dark:text-primary hover:pt-0.5  dark:hover:text-blue ">proyectos</a> tecnológicos y de diseño web. Me gusta programar, averiguar o crear “cosas”, los gatos y tomar café. <br/>Si quieres saber más sobre mis proyectos <a href="#contact" className="text-secundary hover:bg-primary inline hover:text-gray hover:pb-1 hover:px-0.5 hover:pt-0.5 dark:text-primary dark:hover:text-blue">¡Puedes enviarme una nota!</a>
                </p>

        </div>
    </section>
    )
  }