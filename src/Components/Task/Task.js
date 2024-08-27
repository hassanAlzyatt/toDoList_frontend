import "./Task.css"
import { useDispatch } from "react-redux";
import { getTasks,deleteTask ,updateTask} from "../../utilits/handleApiRequests";
import { setTasks, setUpdateTrue } from "../../Redux/Actions";


export default function Task (props) {
    const dispatch = useDispatch()


    const {Category, Title , input,updateInput , Status ,id} = props;

    const cirlceStyle = {
        color: Category == "important-urgent" ? "green" :
        Category == "notImportant-urgent" ?"red" :
        Category == "important-notUrgent" ? "blue" :
        Category == "notImportant-notUrgent" ? "grey" :"grey"


    }
    const taskStyle =
    {
        backgroundColor: Status=="Done"?"grey" :"white"
    }
    function deleteProcess(id) {
        deleteTask(id)
            .then(() => getTasks())  
            .then((tasks) => {
                dispatch(setTasks(tasks));
            })
            .catch((error) => console.log(error));
    }

    function hanleUpdateFromTask(input,updateInput){
        dispatch(setUpdateTrue())
        updateInput({
            Title,
            Category,
            id

        })
       

    }
    function setTaskComplete(id) {
        const body = {Status:"Done"} 
        updateTask(body,id)
            .then(() => getTasks())  
            .then((tasks) => {
                dispatch(setTasks(tasks));
            })
            .catch((error) => console.log(error));
    }
 
    

   return(
    <div className = "task-class" style={taskStyle}>
        {<i class="fa-solid fa-circle" style={cirlceStyle}></i>}
         <p id="text-id">{Title}</p>
         <i class="fa-solid fa-square-pen" onClick={() =>hanleUpdateFromTask(input,updateInput)}></i>
         <i class="fa-solid fa-trash" onClick={()=>deleteProcess(id)}></i>
        
         {
            Status == "Done"? 
            <i class="fa-solid fa-circle-check"></i> :
            <i class="fa-regular fa-circle" onClick={()=>setTaskComplete(id)}></i>
         }



    </div>
   );

}
