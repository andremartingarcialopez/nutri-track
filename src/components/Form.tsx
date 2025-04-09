import { useState } from "react"
import { categories } from "../data/categories"
import { ActivityActions } from "../reducers/ActivityReducers";
import { v4 as uuid } from "uuid";
import { Activity } from "../types/types";

type FormProps = {
    dispatch: React.ActionDispatch<[action: ActivityActions]>
}

export function Form({dispatch}: FormProps) {

    const initialStateActivity: Activity = {
        id: uuid(),
        category: 1,
        activityName: "",
        calories: 0
    }

    const [activity, setActivity] = useState(initialStateActivity);

    

    function handleChange(e:  React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLInputElement>) {

        const formartNumber = ["category","calories"].some(function (option) {
            return e.target.id == option
        });

        setActivity({ ...activity, [e.target.id]: formartNumber ? Number(e.target.value) : e.target.value  })
    }

    function validateForm() {
        if (activity.activityName == "" || activity.calories <= 0) {
            return true
        }else{
            return false
        }
    }

    function addActivity(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("Agregando")
        dispatch({type: "save-activity", payload: {newActivity: activity}})
        setActivity(initialStateActivity)
    }

    return (
        <>
            <div className="mx-auto max-w-4xl flex justify-center items-center h-[100%]">
                <form onSubmit={addActivity} className=" p-10 rounded-2xl  bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10 border border-gray-100 w-full mx-2 bg-black/10">

                    <div className="my-5">
                        <label className="text-white font-bold p-2" htmlFor="category">Categoria:</label>
                        <select className="w-full border text-white border-white p-2 rounded-xl font-bold" name="" id="category" value={activity.category} onChange={handleChange}>
                            {categories.map(function (category) {
                                return (
                                    <option key={category.id} className="text-black" value={category.id}>{category.categoryName}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="my-5">
                        <label className="text-white font-bold p-2" htmlFor="activityName">Actividad:</label>
                        <input id="activityName" className="w-full border text-white border-white p-2 rounded-xl font-bold" type="text" placeholder="Ej. Correr, Tacos, Pesas, Enchiladas" value={activity.activityName} onChange={handleChange} />
                    </div>

                    <div className="my-5">
                        <label className="text-white font-bold p-2" htmlFor="calories">Calorias:</label>
                        <input id="calories" className="w-full border text-white border-white p-2 rounded-xl font-bold" type="number" placeholder="Ej. 800, 500" value={activity.calories} onChange={handleChange} />
                    </div>

                    <div className="flex w-full">
                        <input type="submit" className="backdrop-blur-xs border font-bold border-gray-100 w-full bg-black/10 text-white p-2 hover:bg-white/50 hover:cursor-pointer hover:text-black disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-white" value={"Enviar"} disabled={validateForm()} />
                    </div>
                </form>
            </div>
        </>
    )
}
