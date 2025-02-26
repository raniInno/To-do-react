import { createSlice, nanoid } from "@reduxjs/toolkit";

let count=10;
const initialState ={
    todos:[{
        id:1, 
        text: "task0",
        Status: "Complete",
        Action: "delete"       
    },
    {
        id:2, 
        text: "task0",
        Status: "Complete",
        Action: "delete",

    },
    {
        id:3,
        text: "task1",
        Status: "pending",
        Action: "delete", 
    },
    {
        id:4,
        text: "task2",
        Status: "Complete",
        Action: "delete",
    },
    {
        id:5,
        text: "task3",
        Status: "pending",
        Action: "delete",

    },
    {
        id:6,
        text: "task4",
        Status: "pending",
        Action: "delete",

    },
    {
        id:7,
        text: "task5",
        Status: "pending",
        Action: "delete", 
    },
    {
        id:8,
        text: "task6",
        Status: "Complete",
        Action: "delete",
    },
    {
        id:9,
        text: "task7",
        Status: "pending",
        Action: "delete",

    }
]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo : (state, action)=>{
            const todo={
                id: count++,
                text: action.payload,
                Status: "pending",
                Action: "Delete"

            }
            state.todos.push(todo);
            // console.log(state.todos.);

        },
        removetodo: (state,action)=>{
            state.todos =  state.todos.filter((todo)=> todo.id != action.payload)
            count--;
        }, 
        update :(state,action)=>{   
            console.log(action.payload);
            console.log(state.todos[action.payload-1].id);       
            state.todos[action.payload -1].Status = state.todos[action.payload-1].Status=="pending"?"Complete":"pending";

        }
    }

})

export const { addtodo, removetodo,update} = todoSlice.actions;
export default todoSlice.reducer;