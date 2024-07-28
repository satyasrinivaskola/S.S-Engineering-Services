

import React, { Component } from 'react'
import axios from 'axios'

class Postdata extends Component
{
    constructor(props){
super(props)
    this.state={
        title:'',
        body:'',
        name:''
    }


    }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    onsubmitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }
    render(){
const {title,body,name}=this.state
        return(
            <div>
                <form onSubmit={this.onsubmitHandler}>
                    <div>
                        <input type='text'  name ='title'value={title} onChange={this.changeHandler}/></div>
                                       
                    <div>
                    <input type='text' name='body' onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <input type='text' name='name' onChange={this.changeHandler}></input></div>
                  
                        <button type='submit'>submit</button>
                    
                </form>
            </div>
        )
    }
}
export default Postdata


