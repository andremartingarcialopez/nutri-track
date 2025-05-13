import { InitialStateType } from "../reducers/ActivityReducers"

type TrackerProps = {
    state: InitialStateType
}

export default function Tracker({ state }: TrackerProps) {

    function consumedCalories() {
        return state.activities.reduce((total, acttivity) => acttivity.category == "1" ? total = total + acttivity.calories : total, 0)
    }

    function bornedCalories() {
        return state.activities.reduce((total, acttivity) => acttivity.category == "2" ? total = total + acttivity.calories : total, 0)
    }

    const totalCalories = () => {
        return consumedCalories() - bornedCalories()
    }

    
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between text-center font-bold text-3xl rounded-xl  shadow-2xl shadow-gray-400  p-5 mt-3 mx-2 text-gray-700">

                <div className="mx-auto max-w-4xl">
                    <p>{consumedCalories()}</p>
                    <p>Consumidas</p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <p>{bornedCalories()}</p>
                    <p>Quemadas</p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <p>{totalCalories()}</p>
                    <p>{` ${totalCalories() < 0 ? `Deficit Calorico` : `Total del dia`}`}</p>
                </div>

            </div>
        </>
    )
}
