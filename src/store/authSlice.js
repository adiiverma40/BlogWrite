import {createSlice} from "@reduxjs/toolkit"
import { LogoutUser } from "../appwrite/Auth";

const initialState = {
    userData : null,
    status :false,
    isDataLoaded:false,
   title:'',
   content:"",
   $id:'',
   edit: false,
   email:''
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
        post: (state , action) =>{
            state.content= action.payload.content
            state.title = action.payload.title
            state.$id = action.payload.$id
            state.edit = action.payload.edit
            state.email = action.payload.email
        }
 
    }
})

export const { login , logout, post} = authSlice.actions
export default authSlice.reducer