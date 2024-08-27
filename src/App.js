
import Task from "./Components/Task/Task";
import Form from "./Components/Form/Form";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { getTasks } from "./utilits/handleApiRequests";
import { setTasks } from "./Redux/Actions";



function App() {
  const [input,setInput] = useState(
    {
        Title:"",
        Category:"",
        id:0
    }
)
function updateInput (object){
  setInput(object)

}
  const dispatch = useDispatch()
  const all_tasks = useSelector((state) =>{ return(state.allTasks)})
  
 
  useEffect(() => {
    getTasks().then((tasks) =>{
      dispatch(setTasks(tasks))
     
    }).catch((error) => console.log(error)) 
    
    
  }, [])


  return (
    
    <div className="App">
      <Form  input={input} updateInput = {updateInput} setInput={setInput}/>
     <div className=" all-tasks-class">
     {
      all_tasks.map((task) => {
        return <Task {...task}  key={task._id}  id={task._id } input={input} updateInput = {updateInput}/>
      }
      )

     }</div>  
      
      
      
    </div>
  
   
    
  );
}

export default App;
