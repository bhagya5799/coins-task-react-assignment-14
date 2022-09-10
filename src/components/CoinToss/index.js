// Write your code here
import React, {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    countTotal: 0,
    headsCount: 0,
    tailsCount: 0,
    headsImage: true,
  }

  clickButton = () => {
    const {countTotal, headsImage} = this.state
    const {headsCount} = this.state
    const {tailsCount} = this.state
    const things = ['Heads', 'Tails']
    if (countTotal !== 8) {
      const thing1 = things[Math.floor(Math.random() * things.length)]
      this.setState({headsImage: thing1 === 'Heads'})
      this.setState({countTotal: countTotal + 1})
      if (thing1 === 'Heads') {
        this.setState({headsCount: headsCount + 1})
      } else {
        this.setState({tailsCount: tailsCount + 1})
      }
    }
  }

  render() {
    const {countTotal, headsCount, tailsCount, headsImage} = this.state
    const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="coin-toss-game">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={headsImage ? headUrl : tailsUrl} alt="toss result" />
          <button onClick={this.clickButton}>Toss Coin</button>
          <div className="score">
            <p>Total:{countTotal}</p>
            <p>heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
