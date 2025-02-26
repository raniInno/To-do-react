import React, { useState } from "react";
import './task.css';
import { useDispatch } from "react-redux";
import { removetodo, update } from "../features/todos/TodoSlice";


const Task =({task ,status,index})=>{
    const dispatch = useDispatch()

    return(
        <>
        <tr className="Task">
            <td>{index}</td>
                <td >
                  {task}
                </td>
                <td >
                    <button onClick={()=>{dispatch((update(index)))}} className={status} >
                        {status} 
                    </button>
                </td>
                <td> <button onClick={()=>{dispatch(removetodo(index))}} className="delete"> Delete </button></td>

            </tr>
        </>
    )
}
export default Task;