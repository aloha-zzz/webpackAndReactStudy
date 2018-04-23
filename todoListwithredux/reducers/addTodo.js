import {combineReducers} from 'redux'

function handleAddTodo(state = {input:'',content:[]},action) {
    let newState;
    let timer;
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

        case "ASYNC":
            newState=JSON.parse(JSON.stringify(state))
            newState.content.push({value:'async',id:action.id});
            newState.input='';
            return newState;

        case "DELETE_TASK":
            newState=JSON.parse(JSON.stringify(state));
            let num;
            newState.content.map((item,index)=>{
                if(item.id==action.id){
                    num=index;
                }
            })
            newState.content.splice(num,1);
            return newState
        case 'REQUEST':
            console.log('start Time')
            // timer=setInterval(()=>{console.log(1)},100)
            return state;
        case 'SUCCESS':

            console.log('success')
            clearInterval(timer);
            newState=JSON.parse(JSON.stringify(state))
            newState.content.push({value:action.data.data.data[0].content,id:action.id});
            return newState;
        case 'ERROR':
            clearInterval(timer);
            console.log(action.data);
            return state;
            
        default:
            return state;
    }
}

function changeColor(state = {time: 0,color:'red'}, action){
    switch (action.type){
        case 'COLOR':
            if(state.time==0){
                return Object.assign({},state,{time: 1, color:'green'})
            }else{
                return Object.assign({},state,{time: 0, color: 'red'})
            }
        default:
            return state;
    }
}

 const AllReducers=combineReducers({
    a:handleAddTodo,
    b:changeColor
 })


export default AllReducers;