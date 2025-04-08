
export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-2 items-center gap-4">

        <div>
          <img className="w-[100%]" src="https://images.pexels.com/photos/6660071/pexels-photo-6660071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen-contacto" />
        </div>

        <div className="px-3">
            <h2 className=" pl-20 text-3xl font-semibold">Datos De Contacto</h2>

          <div className="flex justify-center items-center">
            <div className="flex flex-row items-center justify-around gap-5 mt-5 bg-amber-200/60 w-[80%] rounded-xl p-2 h-100 ">

              <div className="h-full flex flex-col justify-around items-start font-bold">
                <p>Correo Electronico:</p>
                <p>Telefono:</p>
                <p>Domicilio:</p>
              </div>

              <div className="h-full flex flex-col justify-around items-start">
                <p>nutritrack@correo.com</p>
                <p>+52 33-12-34-56</p>
                <p>Av. Lazaro Cardenas, Lomas de los Arboles #4487</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
