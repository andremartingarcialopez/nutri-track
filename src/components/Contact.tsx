
export default function Contact() {
  return (
    <>
      <div className="lg:grid grid-cols-2 items-center gap-4">

        <div>
          <img className="w-[100%]" src="https://images.pexels.com/photos/6660071/pexels-photo-6660071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen-contacto" />
        </div>

        <div className="mt-5">
          <h2 className="text-2xl md:text-3xl text-center font-semibold">Datos De Contacto</h2>

          <div className="mx-3 h-[20rem] flex flex-col justify-around items-start font-bold bg-amber-200/50 rounded-2xl p-5 my-5">
            <p className="flex flex-col justify-center items-center w-full">Correo Electronico: <span className="font-normal text-center">nutritrack@correo.com</span></p>
            <p className="flex flex-col justify-center items-center w-full">Telefono: <span className="font-normal text-center">+52 33-12-34-56</span></p>
            <p className="flex flex-col justify-center items-center w-full">Domicilio: <span className="font-normal text-center">Av. Lazaro Cardenas, Lomas de los Arboles #4487</span></p>
          </div>


        </div>
      </div>
    </>
  )
}
