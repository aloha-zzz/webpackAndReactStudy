import React from 'react';
import './List.css';

class List extends React.Component{

    render(){
        return(
            <ul>
                <li className="top">下面是todoList</li>
                {
                    this.props.value.content.map((item,index)=>{
                        return <li key={item.id}>{item.value}<button id={item.id} onClick={this.props.delete}>删除</button></li>
                    })
                }
            </ul>
        )

    }
}
export default List
