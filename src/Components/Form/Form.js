import { useDispatch, useSelector } from "react-redux";
import "./Form.css"
import { addTask,getTasks,updateTask } from "../../utilits/handleApiRequests";
import { setTasks, setUpdateFalse } from "../../Redux/Actions";
import { useState } from "react";


export default function Form (props){

    const updateOption = useSelector(state => state.updateOption)
    const dispatch = useDispatch()

const {input, setInput} =props
   
    console.log(input)


    function updateFormInput (event){
        const {name ,value} = event.target
        setInput((old_input) => {
            return {...old_input,[name]:value}

        })
    }

    function addNewTask () {
      
            addTask(input)
                .then(() => getTasks())
                .then((tasks) => {
                    dispatch(setTasks(tasks));
                    setInput({ Title: "", Category: "" });
                })
                .catch((error) => console.log(error.response?.data?.error?.errorResponse?.errmsg));
      
        
        
          
    }

    function handleUpateProcess (input){
        const{id,Title,Category} = input

        console.log(id)
    const updatedTask =
    {
        Title,
        Category  

    }
        
        updateTask( updatedTask,id)
        .then(() => getTasks())  
        .then((tasks) => {
            dispatch(setTasks(tasks));
            dispatch(setUpdateFalse());
            setInput({ Title: "", Category: "" });

        })
        .catch((error) => console.log(error));

    }

  


   
    return(
        <div className="form-class">
            <form onSubmit={(event)=> event.preventDefault()}>
              
                <input  id = "title"
                type="text"
                 name = "Title" 
                 placeholder="What is our next task ??"
                 value={input.Title}
                 onChange={(event)=>updateFormInput(event)}
                 
                 />
               
               
               <div className=" class-p">
              
                    <select name="Category"  value={input.Category}
                 onChange={(event)=>updateFormInput(event)}>
                        <option value = "" >Choose Priority</option>
                        <option value = "important-urgent" >important-urgent</option>
                        <option value = "notImportant-urgent" >notImportant-urgent</option>
                        <option value = "important-notUrgent" >important-notUrgent</option>
                        <option value = "notImportant-notUrgent" >notImportant-notUrgent</option>
                    </select>
               </div>
               <button id = "add-button" onClick={ updateOption ?()=>handleUpateProcess(input) :() =>addNewTask()}
                > {updateOption? "Update": "Add"}</button>
            

            </form>
        </div>
    );
}