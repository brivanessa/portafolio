import PropTypes from 'prop-types'; 

export const Article = ({image, title, lenguages, url}) => {
  return (
    <article className="w-full "  >
        <div className="relative w-full h-auto  "  >

            <div className={`opacity-0 hover:opacity-100 bg-gray dark:bg-skyblue text-center absolute w-full h-full transition-all duration-700 justify-center md:hover:py-12   xl:hover:py-14 2xl:hover:py-16 flex flex-col md:justify-between items-center `}>
               <p className='text-sm sm:text-base text-primary'>{title}<br/><span className='dark:text-white text-blue'>{lenguages}</span></p>
               <a className="text-blue mt-2 rounded-lg bg-transparent w-fit px-3 py-1 hover:bg-primary dark:text-white dark:hover:text-blue hover:text-white border border-primary" href={url}>
                Ver
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
    url: PropTypes.node,
  };
