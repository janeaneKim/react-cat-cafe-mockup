import React from "react";
import Image from './components/Images/people-and-cat.jpg';

function App() {
  let [petList, setPetList] = React.useState([]);
  let [petName, setPetName] = React.useState("");
  let [petBreed, setPetBreed] = React.useState("");
  let [petAge, setPetAge] = React.useState(0);

  function handleNameInput(event){
    setPetName(event.currentTarget.value);
  }

  function handleBreedInput(event){
    setPetBreed(event.currentTarget.value);
  }

  function handleAgeInput(event){
    setPetAge(event.currentTarget.value);
  }

  function handleClick(event){
    let petObject= { name: petName, breed:petBreed, age:petAge};
    setPetList([...petList, petObject]);
    setPetName("");
    setPetBreed("");
    setPetAge(0);
  }

  let petElementArray = petList.map((animal, index) => {
    return (
      <div key={index}>
        <div>Name: {animal.name}</div>
        <div>Breed: {animal.breed}</div>
        <div>Age: {animal.age}</div>
      </div>
    )
  })

  return (
    <div>
      <div>
        <h4>Tell us about your pet!</h4>
        {petElementArray}
        <input value={petName} onChange={handleNameInput} type="text" placeholder="Pet Name"/>
        <input value={petBreed} onChange={handleBreedInput} type="text" placeholder="Pet Breed"></input>
        <input value={petAge} onChange={handleAgeInput} type="text" placeholder="Pet Age"></input>
        <button onClick={handleClick}>Add Animal</button>
      </div>
      <br/>
      <div>
        <img src={Image} alt="people-and-cats"></img>
      </div>
    </div>

  )
}

export default App;
