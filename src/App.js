import './App.css';
import PersonCard from './components/PersonCard';
import PersonCardObj from './components/PersonCardObj';

function App() {
  console.log("Hello react.")

  const x = "Hello from the function"

  const toDoList = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs"
  ]

  const person1 = {firstName:"Jane", lastName:"Doe", age:45, hairColor:"Black"}

  // document.getElementById()

  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <div>
        {
          toDoList.map((item, idx) => {
            return (
              <div key={idx}>
              <li> {item} </li>
              </div>
            )
          })
        }
      </div>
      <PersonCardObj person={person1}/>
      <PersonCard firstName="John" lastName="Smith" age = {88} hairColor = "Brown"/>
      <PersonCard firstName="Millard" lastName="Fillmore" age = {50} hairColor = "Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age = {62} hairColor = "Brown"/>
    </div>
  );
}

export default App;
