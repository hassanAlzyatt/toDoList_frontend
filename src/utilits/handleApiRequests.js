
import axios from "axios"
import { useDispatch as dispatch } from "react-redux"
import { setTasks } from "../Redux/Actions"

const baseUrl = "http://127.0.0.1:3000/api/task"


const getTasks = async() =>{

   try{
    const tasks = await axios.get(baseUrl)
    return tasks.data.Tasks
   }
   catch(error) {
    throw error;
   }

}
const addTask = async(newTask) =>{
    try{
        const tasks = await axios.post(baseUrl,newTask)

    }
    catch(error) {
        throw error;
       }
        
}
const deleteTask = async(id) =>{
    try{
         await axios.delete(`${baseUrl}/${id}`)

    }
    catch(error) {
        throw error;
       }
        
}

const updateTask = async(body,id) =>{
    try{
      const newTask =   await axios.patch(`${baseUrl}/${id}`,body)

    }
    catch(error) {
        throw error;
       }
        
}






export {getTasks,addTask,deleteTask,updateTask}