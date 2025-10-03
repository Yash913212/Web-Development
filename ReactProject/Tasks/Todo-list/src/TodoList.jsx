import { useState } from "react"
import './todolist.css'

function List(){
    const [tasks,setTasks] = useState(["Breakfast" , "Cooking", "Eating", "Sleeping"]);
    const [newTask,setnewTask] = useState("");


    function handleinput(event){
        setnewTask(event.target.value);
    }


    function addTask(){
        if(newTask.trim() === "") return;
        setTasks(t => [...t, newTask.trim()]);
        setnewTask("");
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index === 0) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index){
        if(index === tasks.length-1) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
        setTasks(updatedTasks);
    }

        return(<div className="to-do-list">

            <h2>To-Do List</h2>

            <div>
                <input type="text" placeholder="Enter a task"  value={newTask} onChange={handleinput}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>


            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                    <button className="delete-button" onClick={() => moveTaskDown(index)}>Down</button>
                </li>
                )}
            </ol>
    </div>)
}

export default List