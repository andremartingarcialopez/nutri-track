import { Activity } from "../types/types"

export type ActivityActions = 
    {type: "save-activity", payload: {newActivity: Activity}} |
    {type: "edit-activity", payload: {id: Activity["id"]}} |
    {type: "delete-activity", payload: {id: Activity["id"]}} |
    {type: "reset-app"} 

export type InitialStateType = {
    activities: Activity[]
    id: Activity["id"]
}

function getLocalStorage(): Activity[] {
    const activitiesLocal = localStorage.getItem("activities")
    return activitiesLocal ? JSON.parse(activitiesLocal) : []
    
}

export const initialState: InitialStateType = {
    activities: getLocalStorage(),
    id: ""
}


export function activityReducers(state: InitialStateType = initialState, action: ActivityActions) {
    
    if (action.type == "save-activity") {
        
        let activitiesUpdates:Activity[] = []
        if (state.id) {
            activitiesUpdates = state.activities.map(act => act.id == state.id ? action.payload.newActivity : act)
        }else{
            console.log("Nuevo")
            activitiesUpdates = [ ...state.activities, action.payload.newActivity]
        }

        return {
            ...state, activities:activitiesUpdates, id: ""
        }
    }

    if (action.type == "edit-activity") {

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Esto hace que el scroll sea animado
          });

        return {
            ...state, id: action.payload.id
        }
    }

    if (action.type == "delete-activity") {

        const deleteAct: Activity[] = state.activities.filter(act => act.id !== action.payload.id);
        
        return {
            ...state, activities:deleteAct
        }
    }

    if (action.type == "reset-app") {

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Esto hace que el scroll sea animado
          });
        
        return{
            activities: [], id: ""
        }
    }

    return state
}