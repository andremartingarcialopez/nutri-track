import { useReducer } from "react";
import { Form } from "../components/Form";
import { ListActivities } from "../components/ListActivities";
import { activityReducers, initialState } from "../reducers/ActivityReducers";

export default function CaloriesTracker() {

  const [state, dispatch] = useReducer(activityReducers, initialState)
  return (
    <>
      <header className="bg-green-700">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-4xl font-bold text-white">Nutri Tracker</h1>

          <button>Reiniciar</button>
        </div>
      </header>

      <section className="bg-center relative bg-cover bg-no-repeat py-10 px-5 bg-fixed m-0" style={{ backgroundImage: `url("https://images.pexels.com/photos/6954466/pexels-photo-6954466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, }}>

        <div className="h-full">
          <Form 
          dispatch={dispatch}/>
        </div>

      </section>

      <section>
        <div className="mx-auto max-w-4xl my-5">
          <ListActivities
          activities={state?.activities || []} />
        </div>
      </section>
    </>
  )
}
