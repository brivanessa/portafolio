import PropTypes from 'prop-types'; 

export const Article = ({image, title, lenguages}) => {


  return (

    <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-4 rounded-lg filter grayscale hover:scale-105 hover:filter-none  duration-200 "  >
        <div className="w-full h-48 sm:h-56 overflow-auto touch-pan-y rounded-lg border-2 hover:border-0">
            <img src={image} alt={`${title} image`} className="w-[150%] max-w-none h-full"/>
        </div>
        <div className="text-sm sm:text-base text-center">
            <h3 className="font-bold text-primary">
            {title}
            </h3>
            <p className=" text-tertiary">
            {lenguages}
            </p>
        </div>
    </article>

  )
}

Article.propTypes = {
    image: PropTypes.node,
    title: PropTypes.node,
    lenguages: PropTypes.node,
  };
