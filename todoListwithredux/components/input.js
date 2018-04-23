import React from 'react';



class Input extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <input value={this.props.input} onChange={this.props.inputChange}/>
                <button onClick={this.props.addTodo}>AddTodo</button>
                <button onClick={this.props.async}>async</button>
                <span onClick={this.props.changeColor} style={{background: this.props.color}}>{this.props.time}</span>
            </div>
        )
    }
}
export default Input

