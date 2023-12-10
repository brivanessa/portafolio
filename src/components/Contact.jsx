
export const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center  py-6 sm:py-16 dark:bg-blue" id="contact">
        <h2 className="text-xl sm:text-2xl pb-4 sm:pb-6 text-primary text-center">
                Contacto
        </h2>
        <form action="https://getform.io/f/9266e028-3c21-4839-bd87-0e61f95cff09" method="POST" className="flex flex-col items-center justify-center w-full gap-4 px-8 sm:px-20 md:w-2/3 lg:w-1/2 text-sm sm:text-base">
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="border border-blue rounded-lg py-1 px-2 w-full  dark:bg-blue dark:border-primary "
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="border rounded-lg border-blue py-1 px-2 w-full  dark:bg-blue dark:border-primary"
                />
            </div>
            <textarea
                name="mensaje"
                placeholder="Mensaje"
                id=""
                rows="5"
                className="border rounded-lg  py-1 px-2 w-full border-blue dark:bg-blue dark:border-primary"
            />

            <button
                 type="submit"
                 className="rounded-lg bg-primary px-16 py-3 hover:scale-105 hover:text-white hover:shadow-xl  text-blue"
            >
                Enviar
            </button>

        </form>
    </section>
 
 
  
  )
}
