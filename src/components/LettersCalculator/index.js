import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
    text: '',
  }

  onChangeText = event => {
    const inputPhrase = event.target.value
    const lengthOfText = inputPhrase.length
    this.setState({lettersCount: lengthOfText, text: inputPhrase})
  }

  render() {
    const {lettersCount, text} = this.state

    return (
      <div className="letters-counter-bg-container">
        <div className="counter-container">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="input-heading" htmlFor="input-element">
                Enter the phrase
              </label>
              <input
                type="text"
                value={text}
                onChange={this.onChangeText}
                placeholder="Enter the phrase"
                id="input-element"
              />
            </div>
            <h1 className="count-element">No.of letters: {lettersCount}</h1>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="img"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
