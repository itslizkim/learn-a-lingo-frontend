import React from 'react'

class flashCard extends React.Component {

  state = {
    audio: false
  }

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
