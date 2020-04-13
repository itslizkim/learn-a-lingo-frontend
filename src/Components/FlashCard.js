import React from 'react'
// import { Card, Image } from 'semantic-ui-react'

class flashCard extends React.Component {

  state = {
    audio: false
  }

//   handleAudio = (props) => {
    
//     let x = document.getElementByrc("audio")
    
//     x.play();
//   }

  render() {
    const {word, audio, img_url} = this.props.flashcard
    return (
      <div className="flash-card">
            <img alt="oh no!" src={img_url}/>
            <div className="word"><h1>{word}</h1></div>
            <br></br>
            <audio id="audio" src={audio} controls>play</audio>
      </div>
    )
  }
}

export default flashCard
