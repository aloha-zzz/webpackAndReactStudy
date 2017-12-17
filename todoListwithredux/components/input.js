import React from 'react';



class Input extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div>
                <input value={this.props.value.input} onChange={this.props.inputChange}/><button onClick={this.props.addTodo}>AddTodo</button>
            </div>
        )
}
}
export default Input

