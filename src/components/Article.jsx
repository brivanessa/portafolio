import PropTypes from 'prop-types'; 
// import { useState } from "react";

export const Article = ({image, title, lenguages}) => {
  // dark:filter  dark:grayscale  
  // const [hoverArticle, setHoverArticle] = useState(false)
  // onMouseOver={()=>{setHoverArticle(true)}} onMouseOut={()=>{setHoverArticle(false)}}
  return (
    // ${(hoverArticle===true)?"flex":"hidden"}
    <article className="w-full "  >
        <div className="relative w-full h-auto border border-secundary dark:border-primary rounded-lg "  >

            <div className={`opacity-0 hover:opacity-100 bg-gray dark:bg-[#545474] text-center rounded-lg absolute w-full h-full transition-all duration-700 hover:py-12 flex flex-col justify-between items-center `}>
               <p className=''>Lenguajes:<br/><span className='text-tertiary'>{lenguages}</span></p>
               <a className="rounded-lg bg-primary w-fit px-3 py-1 hover:scale-105 hover:text-gray hover:shadow-xl dark:hover:bg-gray   dark:text-blue">
                Enviar
              </a>
            </div>
            <img src={image} alt={`${title} image`} className="w-full h-full rounded-lg "/> 
         
        </div>
    
        <div className="text-sm sm:text-base text-center">
            <h3 className="font-bold text-primary">
            {title}
            </h3>
           
        </div>
    </article>

  )
}

Article.propTypes = {
    image: PropTypes.node,
    title: PropTypes.node,
    lenguages: PropTypes.node,
  };
