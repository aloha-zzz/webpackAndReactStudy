function handleAddTodo(state={input:'',content:[]},action) {
    let newState;
    switch (action.type){
        case 'ADD_TODO':
            newState=JSON.parse(JSON.stringify(state))
            newState.content.push({value:newState.input,id:action.id});
            newState.input='';
            return newState;
        case "INPUT_CHANGE":
            newState=JSON.parse(JSON.stringify(state))
            newState.input=action.content;
            return newState;
        case "DELETE_TASK":

            newState=JSON.parse(JSON.stringify(state));
            let num
            newState.content.map((item,index)=>{
                if(item.id==action.id){
                    num=index;
                }
            })
            newState.content.splice(num,1);
            return newState
        default:
            return state;
    }
}

export default handleAddTodo;