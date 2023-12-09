import { Article } from "./Article"
import image1 from "../assets/images/article1.png"
import image2 from "../assets/images/article2.png"
import image3 from "../assets/images/article3.jpg"
import image4 from "../assets/images/article4.jpg"
import image5 from "../assets/images/article5.png"
import image6 from "../assets/images/article6.png"
import image7 from "../assets/images/article7.png"
import image8 from "../assets/images/article8.jpg"
import image9 from "../assets/images/article9.png"
import image10 from "../assets/images/article10.jpg"

export const ArticlesContainer = () => {
  return (
    <section className=" flex flex-col bg-gray py-6 sm:py-8 px-2 sm:px-20 scroll-mt-14 dark:bg-blue dark:bg-opacity-80" id="projects">
        <h2 className="text-xl sm:text-2xl pb-2 sm:pb-3 text-secundary text-center dark:text-primary">
                Proyectos
        </h2>
        <div className="w-full justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <Article image={image1} title={"Caesar Cipher"} lenguages={"HTML CSS JS" }/>
        <Article image={image2} title={"Fast Food Take Orders"} lenguages={"HTML CSS JS ReactJS" }/>
        <Article image={image3} title={"Online Store"} lenguages={"HTML CSS JS" }/>
        <Article image={image4} title={"Personal Blog"} lenguages={"HTML CSS JS" }/>
        <Article image={image5} title={"Rio 2016 Data"} lenguages={"HTML CSS JS Jest" }/>
        <Article image={image6} title={"Social Network"} lenguages={"HTML CSS JS Firestore" }/>
        <Article image={image7} title={"Stars Wars Data"} lenguages={"HTML CSS JS ReactJS" }/>
        <Article image={image8} title={"University Website"} lenguages={"HTML CSS JS VueJS NextJS Tailwind" }/>
        <Article image={image9} title={"Validate Broken Links"} lenguages={"JS NodeJS" }/>
        <Article image={image10} title={"Yu Gi Oh Cards Data"} lenguages={"HTML SCSS TypeScript Ángular" }/>

        </div>
      
    </section>
  )
}
