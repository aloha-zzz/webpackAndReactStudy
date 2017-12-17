import React from 'react';

import Listwith from './../containers/Listwithconnect';
import Inputwith from './../containers/inputwithconnect';




class App extends React.Component{
    render(){
        return(
            <div>
                <Inputwith/>
                <Listwith/>
            </div>
            )
    }
}

export default App;