import { useReducer } from "react";
import { Form } from "../components/Form";
import { ListActivities } from "../components/ListActivities";
import { activityReducers, initialState } from "../reducers/ActivityReducers";
import { Link } from "react-router-dom";
import Tracker from "../components/Tracker";


export default function CaloriesTracker() {

  const [state, dispatch] = useReducer(activityReducers, initialState)

  localStorage.setItem("activities", JSON.stringify(state?.activities))

  function buttonDisabled() {
    if (state?.activities.length) {
      return true
    } else {
      return false
    }
  }


  return (
    <>
      <header className="z-100 fixed  w-full bg-gray-400/30 rounded-md backdrop-blur-sm bg-opacity-10 border-b border-b-gray-100">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-5 ">
          <Link to={"/"} className="flex flex-col md:flex-row justify-center lg:justify-start items-center  gap-2.5">
            <h1 className=" text-white font-bold text-xl md:text-4xl text-shadow text-shadow-black ">NutriTracker</h1>
            <svg className=" hidden md:flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" strokeWidth="2">
              <path d="M3 3m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
              <path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095z"></path>
            </svg>
          </Link>

          <button disabled={!buttonDisabled()} onClick={() => dispatch({ type: "reset-app" })} className="backdrop-blur-xs border rounded-xl font-bold border-gray-100  bg-black/10 text-white px-4 py-2 hover:bg-white/50 hover:cursor-pointer hover:text-black disabled:cursor-not-allowed text-sm md:text-lg  disabled:bg-black/10 disabled:text-white">Reiniciar</button>
        </div>
      </header>

      <section className="bg-center relative bg-cover bg-no-repeat py-30 px-5 bg-fixed m-0" style={{ backgroundImage: `url("https://images.pexels.com/photos/6954466/pexels-photo-6954466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, }}>

        <div className="h-full">
          <Form
            dispatch={dispatch}
            state={state} />
        </div>

      </section>

      <section className="">
        <div className="">
          <Tracker 
          state = {state}
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl my-5">
          <ListActivities
            activities={state?.activities || []}
            dispatch={dispatch} />
        </div>
      </section>
    </>
  )
}
