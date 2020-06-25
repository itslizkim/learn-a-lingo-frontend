import React from 'react';
import {Card} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux';

function Lesson(props) {

  const history = useHistory();
  const dispatch = useDispatch();

  const {name, img_url} = props.lesson
  console.log(props.lesson)

  const handleLessonClick = (e) => {
    console.log(e.target.alt)
    if (e.target.alt === "fruits") {
      fetch('http://localhost:3000/lessons/fruits')
      .then(r => r.json())
      .then(fruits => {
        dispatch({
            type: "SET_FLASHCARDS",
            payload: fruits.flash_cards
        })
        console.log(fruits.flash_cards)
      }) 
      return (history.push('lessons/fruits'))
    }
    if (e.target.alt === "alphabet") {

      fetch('http://localhost:3000/lessons/alphabet')
      .then(r => r.json())
      .then(alphabet => {
        dispatch({
            type: "SET_FLASHCARDS",
            payload: alphabet.flash_cards
        })
        console.log(alphabet.flash_cards)
      })
      return (history.push('lessons/alphabet'))
    }
    if (e.target.alt === "animals") {
      fetch('http://localhost:3000/lessons/animals')
      .then(r => r.json())
      .then(animals => {
        dispatch({
            type: "SET_FLASHCARDS",
            payload: animals.flash_cards
        })
      })
      return (history.push('lessons/animals'))
    }
  }

  return (
    <Card className="card">
      <Card.Content onClick={handleLessonClick}>
        <img alt={name} src={img_url}/>
        <div className="header" >{name}</div>
      </Card.Content>
    </Card>
  )

} export default Lesson;
