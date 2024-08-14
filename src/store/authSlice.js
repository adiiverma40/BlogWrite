import {createSlice} from "@reduxjs/toolkit"
import { LogoutUser } from "../appwrite/Auth";

const initialState = {
    userData : null,
    status :false
}

export const authSlice = createSlice({
    name:"Authentication",
    initialState,
    reducers:{
        login: (state , action) =>{
                state.status = true;
                state.userData = action.payload.userData    
        },
        logout: (state , action)=>{
            state.status = false,
            state.userData = null
        }
    }
})

export const { login , logout} = authSlice.actions
export default authSlice.reducer