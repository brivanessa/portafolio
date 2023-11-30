
export const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center  my-12 sm:my-16 ">
        <h2 className="text-xl sm:text-2xl pb-4 sm:pb-6 text-primary text-center">
                Contacto
        </h2>
        <form className="flex flex-col items-center justify-center w-full gap-4 px-8 sm:px-20 md:w-2/3 lg:w-1/2 text-sm sm:text-base">
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="border-2 rounded-lg py-1 px-2 w-full "
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="border-2 rounded-lg  py-1 px-2 w-full "
                />
            </div>
            <textarea
                name="mensaje"
                placeholder="Mensaje"
                id=""
                rows="5"
                className="border-2 rounded-lg  py-1 px-2 w-full"
            />

            <button
                 type="submit"
                 className="rounded-lg bg-primary px-16 py-3"
            >
                Enviar
            </button>

        </form>
    </section>
 
 
  
  )
}
