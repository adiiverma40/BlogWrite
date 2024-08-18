import {createSlice} from "@reduxjs/toolkit"
import { LogoutUser } from "../appwrite/Auth";

const initialState = {
    userData : null,
    status :false,
    isDataLoaded:false,
   
}

export const authSlice = createSlice({
    name:"Authentication",
    initialState,
    reducers:{
        login: (state , action) =>{
                state.status = true;
                state.userData = action.payload.userData   
                state.isDataLoaded = action.payload.isDataLoaded 
        },
        logout: (state , action)=>{
            state.status = false,
            state.userData = null
            // state.isDataLoaded = action.payload.isDataLoaded 
        },
 
    }
})

export const { login , logout} = authSlice.actions
export default authSlice.reducer