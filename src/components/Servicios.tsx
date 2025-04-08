const services = [
    {
        image: "https://images.pexels.com/photos/8376198/pexels-photo-8376198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Asesorias Sobre Dietas"
    },
    {
        image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Planeacion de Dieta"
    },
    {
        image: "https://images.pexels.com/photos/8376271/pexels-photo-8376271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Educacion de una alimentacion balanceada"
    }
]

export default function Servicios() {
    return (
        <>
            <h2 className="text-center lg:text-start text-5xl font-semibold my-5">Servicios</h2>

            <div className="lg:grid grid-cols-3 gap-10">
                {services.map(function (service) {
                    return (
                        <div
                            className="bg-cover bg-center h-64"
                            style={{
                                backgroundImage:
                                    `url(${service.image})`,
                            }}>
                            <div className=" h-full flex justify-center items-center bg-black/30">
                                <h2 className="text-white text-2xl p-2 font-bold text-center">{service.title}</h2>
                            </div>
                        </div>
                    )
                })}

            </div>


        </>
    )
}
