import React, { useState } from "react";
import '../App.css';
import Task from "./Task";
import './taskList.css';
import { useDispatch } from "react-redux";
import {addtodo} from '../features/todos/TodoSlice';
import { useSelector } from "react-redux";



const TaskList =()=>{
    const todos = useSelector(state => state.todos);
    const [data, setData] = useState('');

    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
        e.preventDefault();

        dispatch(addtodo(data))


    }


    return(
        <> 
        <div className="to-do">

            {/* take input from the user */}
            <form method="#" onSubmit={handleSubmit}>
            <div className="input">
                <input type="text" placeholder="Add a new task" value={data} 
                onChange={(e)=> setData(e.target.value)}
                name="description"  
                className="input1"/>


                <button 
                onClick={handleSubmit} 
                className="add-Task" 
                type="submit" >
                     Add task
                </button>

            </div>           
        </form>



            
            </div>

            {/* list of task by reducer */}
            <div>My Tasks</div>  

            <hr width="70%"/>

        <table className="table"
            cellPadding="1px" 
            cellSpacing="5px"
            
        >
            <thead><tr>
                <th width="5%">S.no</th> 
                <th width="55%">Title</th>
                <th width ="20%">Status</th>
                <th width="20%">Actions</th>
            </tr></thead>

            <tbody>
            {
                todos.map((todo,index)=>(
                    <>
                    <Task
                    index={todo.id}
                    key={index}
                    task = {todo.text}
                    status={todo.Status}
                    />
                    </>
                    
                    
                ))
            }
            </tbody>
            
        </table>
        </>
    )
}
export default TaskList;
