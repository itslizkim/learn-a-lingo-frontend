import React, { Component } from 'react';
import FlashCard from '../Components/FlashCard';


export default class Lesson extends Component {

    state = {
        lessons: []
    };

    render() {
        return (
            <div>
                <FlashCard/>
            </div>
        )
    }
}



