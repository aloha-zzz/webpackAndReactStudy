import {connect} from 'react-redux';
import {addTodo,saveInfo,async,changeColor} from './../actions/action'
import defaultFunc from './../actions/action'
import Input from './../components/input';
import axios from 'axios'




function mapDispatchToProps(dispatch) {
    return{
        addTodo:()=>{
            dispatch(addTodo());
        },
        inputChange:(e)=>{
            dispatch(saveInfo(e.target.value));
        },
        async:()=>{
            dispatch(defaultFunc.fetchInfo())
        },
        changeColor:()=>{
            dispatch(changeColor())
        }
    }
}

function mapStateToProps(state) {
    return{
        input: state.a.input,
        time: state.b.time,
        color: state.b.color,
    }
}

const Inputwith=connect(
    mapStateToProps,mapDispatchToProps
)(Input);

export default Inputwith;