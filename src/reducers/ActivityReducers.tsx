import { Activity } from "../types/types"

export type ActivityActions = 
    {type: "save-activity", payload: {newActivity: Activity}}

export type InitialStateType = {
    activities: Activity[]
}

export const initialState: InitialStateType = {
    activities:[]
}


export function activityReducers(state: InitialStateType = initialState, action: ActivityActions) {
    
    if (action.type == "save-activity") {
        console.log("Salvando Activity")

        return {
            ...state, activities:[ ...state.activities, action.payload.newActivity]
        }
    }
}