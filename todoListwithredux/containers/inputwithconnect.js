import {connect} from 'react-redux';
import {addTodo} from './../actions/action'
import Input from './../components/input';
import {saveInfo} from './../actions/action';

function mapDispatchToProps(dispatch) {
    return{
        addTodo:()=>{
            dispatch(addTodo());
        },
        inputChange:(e)=>{
            dispatch(saveInfo(e.target.value));

        }
    }
}
function mapStateToProps(state) {
    return{
        value:state
    }
}

const Inputwith=connect(
    mapStateToProps,mapDispatchToProps
)(Input);

export default Inputwith;