import React, {useState} from 'react';


const PersonCard2 = (props) => {
    const [age, setAge] = useState(props.age)

    const birthday = () =>{
        setAge(age+1);
    }

    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ () => setAge(age+1)}>Happy Birthday!</button>
            <button onClick={birthday}>Happy Birthday!</button>
        </div>
    );
}
export default PersonCard2;