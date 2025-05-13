import { useMemo } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types/types"
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/16/solid"
import { ActivityActions } from "../reducers/ActivityReducers"

type ListActivitiesProps = {
    activities: Activity[],
    dispatch: React.ActionDispatch<[action: ActivityActions]>

}

export function ListActivities({ activities, dispatch }: ListActivitiesProps) {

    const formartCategory = useMemo(() => (category: Activity["category"]) => {
        return categories.map(function (cat) {
            return cat.id == category ? cat.categoryName : ""
        })
    }, [activities])

    return (
        <>


            {activities.length ? <h2 className="text-3xl font-bold text-center my-2 text-gray-600">Comidas y Actividades</h2> : <h2 className="text-xl md:text-3xl font-bold text-center my-2 text-gray-600">Nada Registrado</h2>}
            {activities.map(function (activity) {
                return (

                    <div key={activity.id} className="flex justify-between items-center border-t border-t-gray-700 py-4 px-10 mt-5">
                        <div>
                            <p className={`${activity.category == 1 ? `bg-yellow-500` : `bg-orange-500`} w-fit px-2 text-center py-1 font-semibold`}> {formartCategory(activity.category)} </p>
                            <p className="text-xl md:text-3xl font-black text-gray-700">{activity.activityName}</p>
                            <p className={`text-xl md:text-3xl   font-bold ${activity.category == 1 ? `text-yellow-500` : `text-orange-500`}`}>{activity.calories} Calorias</p>
                        </div>


                        <div className="flex flex-col md:flex-row gap-4">
                            <button onClick={() => dispatch({ type: "edit-activity", payload: { id: activity.id } })}>
                                <PencilSquareIcon className={`w-7 h-7 md:w-10 md:h-10 cursor-pointer text-gray-700 ${activity.category == 1 ? `hover:text-yellow-500` : `hover:text-orange-500`}`} />
                            </button>

                            <button>
                                <XCircleIcon onClick={() => dispatch({type: "delete-activity", payload: {id: activity.id}})} className={` w-7 h-7 md:w-10 md:h-10 cursor-pointer text-gray-700 hover:text-red-500`} />
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
