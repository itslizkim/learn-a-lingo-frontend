import React, { Component } from 'react';
import FlashCards from '../Components/FlashCardContainer';


export default class Lesson extends Component {

    state = {
        flashcards: []
    };

    componentDidMount() {
        fetch (`http://localhost:3000/flash_cards`)
        .then(r => r.json())
        .then( resp => this.setState({
            flashcards: resp
        }))
    };
    
    render() {
        return (
            <div>
                <FlashCards flashcards={this.state.flashcards}/>
            </div>
        )
    }
}



