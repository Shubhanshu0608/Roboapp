import React, { Component } from 'react';
import Cardlist from './Cardlist' 

import SearchBox from './SearchBox'
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> {this.setState({robots: users})});
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
        
    }
    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1 className='f1'>Welcome to my page</h1>
                <SearchBox searchChange= {this.onSearchChange} />
                <Cardlist robots={filteredRobots}/>
            </div>
            
        );

    }
}
    


export default App;