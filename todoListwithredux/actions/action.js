let id=0
export   function addTodo() {
    return{
        type:'ADD_TODO',
        id:id++,
    }
}

export  function saveInfo(content) {
    return{
        type:'INPUT_CHANGE',
        content,
    }
}


export function deleteTask(id) {
    return{
        type:'DELETE_TASK',
        id,
    }
}