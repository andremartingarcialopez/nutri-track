import { useMemo } from "react"
import { InitialStateType } from "../reducers/ActivityReducers"
import { categories } from "../data/categories"
import { Activity } from "../types/types"

type ListActivitiesProps = {
    state: InitialStateType
}

export function ListActivities({ state }: ListActivitiesProps) {

    const formartCategory = useMemo(() => (category: Activity["category"]) => {
        return categories.map(function (cat) {
            return cat.id == category ? cat.categoryName : ""
        })
    },[state.activities])

    return (
        <>

            
            {state.activities.length ? <h2 className="text-3xl font-bold text-center my-2 text-gray-600">Comidas y Actividades</h2> : <h2 className="text-2xl md:text-3xl font-bold text-center my-2 text-gray-600">Comienza a Registrar tus Comidas y Actividades</h2>  }
            {state.activities.map(function (activity) {
                return (
                    <>
                        <div className="border-t border-t-gray-700 p-4">
                            <p className={`${activity.category == 1 ? `bg-yellow-500`: `bg-orange-500`} w-fit px-4 text-center py-1 font-semibold`}> { formartCategory(activity.category) } </p>
                            <p className="text-3xl font-black text-gray-700">{activity.activityName}</p>
                            <p className={`text-3xl text-shadow-2xs text-shadow-gray-700  font-bold ${activity.category == 1 ? `text-yellow-500`: `text-orange-500`}`}>{activity.calories} Calorias</p>
                        </div>
                    </>
                )
            })}
        </>
    )
}
