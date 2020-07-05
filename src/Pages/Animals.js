import React from 'react';
import {Card} from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import Nav from '../Components/Navbar'

const Animals = () => {

    const animals = useSelector(state => state.flashcards)

    console.log(animals)

    const animalArr = animals.map(animal => {
        return <Animal
        key={animal.id}
        animal={animal}
        />
    })
    return(
      <div>
          <h1 className="lesson">Animals</h1>
          <Nav/>
          <Card.Group>{animalArr}
          </Card.Group>
      </div>
      
    )
  }; export default Animals;

  const Animal = (props) => {

    const {word, audio, img_url} = props.animal

    return (
        <div className="flash-card">
            <img alt="oh no!" src={img_url}/>
            <div className="word"><h1>{word}</h1></div>
            <br></br>
            {/* <audio id="audio" src={audio} controls>play</audio> */}
        </div>
    )
  }