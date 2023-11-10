import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:'todo',
    initialState:{
        data:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.data=[...state.data,{id:Date.now(),text:action.payload.name}]
        },
        removeData:(state,action)=>{
            const id=action.payload
            state.data=state.data.filter((data)=>data.id !==id)
        },
        editData:(state,action)=>{
            const {id,text}=action.payload
            state.data=state.data.map((item)=>{
                if(item.id==id){
                    return({...item,text})
                }
                return item;
            })
        }
    }
})

export const {addData,removeData,editData}=todoSlice.actions
export default todoSlice.reducer 