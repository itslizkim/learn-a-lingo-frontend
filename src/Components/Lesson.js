import React from 'react';
import {Card} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

function Lesson(props) {

  const history = useHistory()

  const {name, img_url} = props.lesson
  console.log(props.lesson)

  const handleLessonClick = (e) => {
    console.log(e.target)
    if (e.target = "fruits") {
      return (history.push('/lessons/fruits'))
    }
    if (e.target = "alphabet") {
      return (history.push('/lessons/alphabet'))
    }
    if (e.target = "animals") {
      return (history.push('/lessons/animals'))
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
