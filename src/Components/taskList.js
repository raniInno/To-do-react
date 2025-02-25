import React, { useState } from "react";
import { data } from "./data";
import '../App.css';
const Task =()=>{
    const [status, setStatus] = useState("pending");
    const num = [1,2,3];
    const handleStatus = (num)=>{

    }
    const handleAction =()=>{

    }
    return(
        <> 
        <div>
            <input type="text" placeholder="Add a new task"/>
            <button> add task</button>
            </div>  

            <hr width="70%"/>

        <table 
            cellPadding="1px" 
            cellSpacing="5px"
            
        >
            <tr> 
                <th width="60%">Title</th>
                <th width ="20%">Status</th>
                <th width="20%">Actions</th>
            </tr>
            {data.map((task,index)=>
            <tr>
                <td >
                  {task.task}
                </td>
                <td >
                    <button onClick={handleStatus(index)} className={task.Status}>
                        {task.Status}
                    </button>
                </td>
                <td> <button onClick={handleAction(index)} className="delete"> {task.Action}</button></td>

            </tr>
            )}
           
        </table>
        </>
    )
}
export default Task;
