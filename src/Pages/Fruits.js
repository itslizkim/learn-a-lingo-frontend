import React from 'react';
import {Card} from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import Nav from '../Components/Navbar'

const Fruits = () => {
    const fruits = useSelector(state => state.flashcards)

    console.log(fruits)

    const fruitArr = fruits.map(fruit => {
        return <Fruit
        key={fruit.id}
        fruit={fruit}
        />
    })

    return(
      <div>
          <h1 className="lesson">Fruits</h1>
          <Nav/>
          <Card.Group> {fruitArr}
          </Card.Group>
      </div> 
    )
  }; export default Fruits;

  const Fruit = (props) => {

    const {word, audio, img_url} = props.fruit

    return (
        <div className="flash-card">
            <img alt="oh no!" src={img_url}/>
            <div className="word"><h1>{word}</h1></div>
            <br></br>
            <audio id="audio" src={audio} controls>play</audio>
        </div>
    )
  }