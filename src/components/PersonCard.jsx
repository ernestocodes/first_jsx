// import dependencies
import React, {Component} from 'react'

// initiate the class
class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    incrementAge = () => {
        this.setState({age : this.state.age +1})
    }
    
    render(){
        const{firstName, lastName, hairColor} = this.props
        const{age} = this.state
        return(
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () => this.setState({age : this.state.age +1})}>Happy Birthday!</button>
                <button onClick= {this.incrementAge}>Happy Birthday! too</button>
            </div>
        )
    }
}

// export the class
export default PersonCard