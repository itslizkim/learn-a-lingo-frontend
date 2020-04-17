import React from 'react';
import {Card} from 'semantic-ui-react'
import {useSelector } from 'react-redux';
import Nav from '../Components/Navbar'

const Alphabet = () => {

    const alphabet = useSelector(state => state.flashcards)

    console.log(alphabet)

    const alphaArr = alphabet.map(alphabet => {
        return <AlphabetCard
        key={alphabet.id}
        alphabet={alphabet}
        />
    })

    return(
      <div>
          <h1 className="lesson">Alphabet</h1>
          <Nav/>
          <Card.Group> {alphaArr}
          </Card.Group>
      </div> 
    )
  }; export default Alphabet;

  const AlphabetCard = (props) => {

    const {word, audio, img_url} = props.alphabet

    return (
        <div className="flash-card">
            <img alt="oh no!" src={img_url}/>
            <div className="word"><h1>{word}</h1></div>
            <br></br>
            <audio id="audio" src={audio} controls>play</audio>
        </div>
    )
  }