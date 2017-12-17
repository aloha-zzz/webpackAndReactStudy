import React from 'react'
import ReactDom from 'react-dom'

// 首先我们需要导入一些组件...
import {BrowserRouter ,HashRouter, Switch ,Route, Link } from 'react-router-dom'

function Header() {
    return(
        <div>Header</div>
    )
}
function Main() {
    return(
        <div>Main</div>
    )
}

const App=()=>(
    <div>
        <Header/>
        <Main/>
    </div>
)




// ReactDom.render(
//     <HashRouter>
//         <div>
//             <li><Link to='/main'>main</Link></li>
//             <Route exact path='/' component={App}/>
//             <Route  path='/main' component={Main}/>
//             <li><Link to='/'>back</Link></li>
//         </div>
//     </HashRouter>
//     , document.getElementById('root')
// )




const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => {
    console.log(match);
    return(

    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)}

const BasicExample = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics123">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics123" component={Topics}/>
        </div>
    </BrowserRouter>
)

ReactDom.render(
        <BasicExample/>,
    document.getElementById('demo')

)