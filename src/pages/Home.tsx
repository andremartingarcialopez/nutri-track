import Alondra from "../components/Alondra"

import Contact from "../components/Contact"
import Frase from "../components/Frase"
import Servicios from "../components/Servicios"
import {  Link } from "react-router-dom"


export default function Home() {
    return (
        <>
            <div className=" bg-center relative bg-cover bg-no-repeat h-[100vh] bg-fixed m-0"
                style={{ backgroundImage: `url("https://images.pexels.com/photos/7615467/pexels-photo-7615467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, }}>

                <div className="absolute inset-0 bg-black/30"></div>

                <div className=" absolute inset-0">
                    <header className=" z-100 fixed  w-full bg-gray-400/30 rounded-md backdrop-blur-sm bg-opacity-10 border-b border-b-gray-100">

                        <Link to={"/"} className="flex flex-col md:flex-row justify-center lg:justify-start items-center  gap-2.5 p-5 mx-auto max-w-4xl">
                            <h1 className=" text-white font-bold text-4xl text-shadow text-shadow-black ">NutriTracker</h1>
                            <svg className=" hidden md:flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" strokeWidth="2">
                                <path d="M3 3m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                <path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095z"></path>
                            </svg>
                        </Link>
                    </header>
                </div>

                <div className="absolute inset-0 h-full w-full  flex flex-col justify-center items-center mx-auto max-w-5xl px-2">
                    <h2 className="text-white text-4xl md:text-5xl text-center font-light leading-15 ">El Asesoramiento Nutricional Mas Confiable De La Ciudad</h2>


                    <Link to="/caloriestracker" className="mt-15 text-xl md:text-2xl px-8 py-2 text-white cursor-pointer hover:font-semibold hover:bg-white/30  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-center ">Comieza a Contar tus Calorias</Link>

                </div>

            </div>


            <section>
                <div>
                    <Alondra />
                </div>
            </section>

            <section>
                <div className="mx-auto lg:px-10 lg:py-10">
                    <Servicios />
                </div>
            </section>

            <section>
                <Frase />
            </section>

            <section>
                <Contact />
            </section>
        </>
    )
}
