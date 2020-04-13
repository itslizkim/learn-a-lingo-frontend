import React from 'react';
import FlashCard from './flashCard'
import { Card } from 'semantic-ui-react'

const FlashCardContainer = (props) => {


    const flashCardArray = props.flashcards.map(flashcard => {
        return <FlashCard
        key={flashcard.id}
        flashcard={flashcard}
        />
    })

    return (
        <Card.Group itemsPerRow={6}>
        {flashCardArray}
        </Card.Group>
    )


}

export default FlashCardContainer;


