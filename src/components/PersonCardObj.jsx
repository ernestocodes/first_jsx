import React, { Component } from 'react'

export class PersonCardObj extends Component {
    render() {
        const{firstName, lastName, age, hairColor} = this.props.person
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCardObj