import PropTypes from 'prop-types'; 

export const Article = ({image, title, lenguages}) => {
  return (
    <article className="w-full "  >
        <div className="relative w-full h-auto  dark:border-primary"  >

            <div className={`opacity-0 hover:opacity-95 bg-gray dark:bg-[#545474] text-center absolute w-full h-full transition-all duration-700 justify-center md:hover:py-12   xl:hover:py-14 2xl:hover:py-16 flex flex-col md:justify-between items-center `}>
               <p className='text-sm sm:text-base font-semibold text-primary'>{title}<br/><span className='font-normal text-secundary'>{lenguages}</span></p>
               <a className="mt-2 rounded-lg bg-transparent w-fit px-3 py-1 hover:bg-primary hover:text-white  text-secundary dark:hover:bg-gray   dark:text-blue border border-primary" href="https://brivanessa.github.io/Caesar-Cipher/src/" >
                Enviar
               </a>
            </div>
            <img src={image} alt={`${title} image`} className="w-full h-full "/> 
         
        </div>
    </article>

  )
}

Article.propTypes = {
    image: PropTypes.node,
    title: PropTypes.node,
    lenguages: PropTypes.node,
  };
