
export default function Frase() {
    return (
        <>
            <div
                className="relative bg-center bg-cover bg-no-repeat h-[100vh] bg-fixed m-0"
                style={{ backgroundImage: `url("https://images.pexels.com/photos/28976231/pexels-photo-28976231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}
            >
                {/* Filtro oscuro sobre la imagen */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Contenedor de texto centrado */}
                <div className="flex flex-col justify-center items-center h-full mx-auto max-w-5xl relative z-10">
                    <h2 className="text-white text-shadow text-shadow-black text-shadow-2xs text-3xl px-2 md:text-5xl text-center font-light tracking-wide leading-15">
                        No hay dos personas exactamente iguales. Por eso nuestros programas están individualizados, lo que garantiza la seguridad y eficacia.
                    </h2>
                    <p className="mt-5 text-white text-xl">- Alondra Estrada -</p>
                </div>
            </div>
        </>
    )
}
