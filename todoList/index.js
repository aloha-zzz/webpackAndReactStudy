import React from 'react';
import reactDom from 'react-dom';


class Child extends React.Component{
    render(){
        return<input type='text' onChange={this.props.handleChild}/>
    }
}

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        this.handle=this.handle.bind(this)
    }
    handle(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return<div>
            <Child handleChild={this.handle}/>
            <p>{this.state.value}</p>
        </div>
    }
}


reactDom.render(
    <Parent/>,
    document.getElementById('test')
)



class InputLine extends React.Component{
    render(){
        return<input type='text' onChange={this.props.changeValue}/>
    }
}

class OutputLine extends React.Component{
    render(){
        return<p>输入内容:{this.props.valueOut}</p>
    }
}


class OuterBox extends React.Component{
    constructor(props){
        super(props)
        this.state={value:''}
        this.changeValue=this.changeValue.bind(this)
    }
    changeValue(e){
        this.setState({value:e.target.value})
    }
    render(){
        return<div>
            <InputLine changeValue={this.changeValue}/>
            <OutputLine valueOut={this.state.value}/>
        </div>
    }
}

reactDom.render(
    <OuterBox/>,
    document.getElementById('inputBox')
)






function Input(props) {
    return(<div>
        <input ref={props.inputRef} type='text'/>
        <button onClick={props.addTask}>添加</button>
    </div>)
}



class Mission extends React.Component{
    render(){
        var content=this.props.taskContent;
        console.log(content)
        return (
            <div>
                <ul>
            {
                content.map((item,index)=> {
                    return(
                        <li key={index}>
                            {item}<button  onClick={this.props.deleteTask}>删除{index}</button>
                        </li>
                    )
                })
            }
                </ul>
        </div>)
    }
}



class Outer extends React.Component{
    constructor(props){
        super(props);
        this.state={task:['zzz','aaa','yeah']}
        this.add=this.add.bind(this);
        this.delete=this.delete.bind(this);
    }

    add(){
       console.log(this.info);
        if(this.info==''){
            console.log('no input info')
        }else{

            this.state.task.push(this.info.value)
            this.setState({
                task:this.state.task
            })
            this.info.value='';

        }
    }

    delete(e){
        if(e.target.nodeName.toLocaleLowerCase()==='button'){
            var num=parseFloat(e.target.innerText.substr(2));

            this.state.task.splice(num,1);

            this.setState({
                task:this.state.task
            })
        }
        console.log(e.target)
    }
    render(){
        console.log(this);
        return(
            <div>
            <Input inputRef={(e)=>{this.info=e}} addTask={this.add}/>
            <Mission taskContent={this.state.task} deleteTask={this.delete}/>
        </div>)
    }
}





reactDom.render(
    <Outer/>,
    document.getElementById('todoList')
)


class TestAjax extends React.Component{
     constructor(props){
         super(props);
         this.state={
             username:"111",
             lastGistUrl:'222'
         }
     };

     componentDidMount(){
         fetch(this.props.source).then(function(response) {
             return response.json();
         }).then(function(data) {
             console.log(data);
         }).catch(function(e) {
             console.log("Oops, error");
         });


     }

     render(){
        return(
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
     }
}
reactDom.render(
    <TestAjax source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('fetch')
)