import React from 'react';
import FlashCardContainer from '../Pages/FlashCardContainer';
import {Card} from 'semantic-ui-react'

function Lesson(props) {

    const {name, img_url, flash_cards} = props.lesson
    console.log(props.lesson)

    const handleLessonClick = () => {
      return( <FlashCardContainer flash_cards={flash_cards}/> )
    }

    return (
      <Card onClick={handleLessonClick}>
        <div className="image">
          <img alt="oh no!" src={img_url}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
      </Card>
    )

}

export default Lesson