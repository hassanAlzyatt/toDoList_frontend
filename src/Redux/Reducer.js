const intialSate = {

    allTasks : [],
   updateOption:false

}


const reducer  = (state = intialSate, action ) => {
    switch(action.type) {

        case "SET_ALL_TASKS": 
        return{
            ...state,allTasks :action.payload
        }
        case "SET_UPDATE_TRUE": 
        return{
            ...state,updateOption :true
        }
        case "SET_UPDATE_FALSE": 
        return{
            ...state,updateOption :false
        }
        

        default :  return  {...state}
    }

   
   
}

export default reducer