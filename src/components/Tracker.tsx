import { InitialStateType } from "../reducers/ActivityReducers"

type TrackerProps = {
    state: InitialStateType
}

export default function Tracker({ state }: TrackerProps) {

    function consumedCalories() {
        return state.activities.reduce((total, acttivity) => acttivity.category == 1 ? total = total + acttivity.calories : total, 0)
    }

    function bornedCalories() {
        return state.activities.reduce((total, acttivity) => acttivity.category == 2 ? total = total + acttivity.calories : total, 0)
    }

    const totalCalories = () => {
        return consumedCalories() - bornedCalories()
    }

    
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between text-center text-white font-bold text-3xl">

                <div>
                    <p>{consumedCalories()}</p>
                    <p>Consumidas</p>
                </div>

                <div>
                    <p>{bornedCalories()}</p>
                    <p>Quemadas</p>
                </div>

                <div>
                    <p>{totalCalories()}</p>
                    <p>{` ${totalCalories() < 0 ? `Deficit Calorico` : `Total del dia`}`}</p>
                </div>

            </div>
        </>
    )
}
