import React from 'react';
import FlashCard from '../Components/flashCard'

const FlashCardContainer = (props) => {


    const flashCardArray = props.flashcards.map(flashcard => {
        return <FlashCard
        key={flashcard.id}
        flashcard={flashcard}
        />
    })

    return (
        <div className="cards">
        <li>{flashCardArray}</li>
        </div>
    )


}

export default FlashCardContainer;


