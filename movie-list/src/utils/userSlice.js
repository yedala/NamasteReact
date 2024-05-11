import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name:'user',
        initialState:null,
        reducers:{
            addUser: (state,action)=>{
                return action.payload;   // return means update state , we can change here or return
            },
            removeUser: (state,action)=>{
                return null;
            }
        }
    }
)
export const {addUser,removeUser} =  userSlice.actions;
export default userSlice.reducer;