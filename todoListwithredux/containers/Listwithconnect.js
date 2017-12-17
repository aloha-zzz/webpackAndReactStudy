import {connect} from 'react-redux';
import List from './../components/List';
import {deleteTask} from "../actions/action";

function mapStateToProps(state) {
    return{
        value:state
    }
}

function mapDispatchToProps(dispatch) {
    return{
        delete:(e)=>{
            console.log(e.target.id)
            dispatch(deleteTask(e.target.id));
        }
    }
}

const Listwith=connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default Listwith;