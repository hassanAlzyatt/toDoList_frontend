const SET_ALL_TASKS = "SET_ALL_TASKS"
const SET_UPDATE_FALSE = "SET_UPDATE_FALSE"
const SET_UPDATE_TRUE = "SET_UPDATE_TRUE"



export const setTasks = (tasks) =>{

    return {    
        type:SET_ALL_TASKS,
        payload :tasks
    }
}


export const setUpdateTrue = () =>{

    return {    
        type:SET_UPDATE_TRUE,
      
    }
}

export const setUpdateFalse = () =>{

    return {    
        type:SET_UPDATE_FALSE,
      
    }
}