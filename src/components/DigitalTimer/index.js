// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {min: 25, sec: 0, text: false}

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
    this.ID = setInterval(this.minite, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  contplus = () => {
    const {text, min} = this.state
    if (text === false) {
      this.setState(prev => ({min: prev.min + 1}))
    } else {
      this.setState({min: {min}})
    }
  }

  contminus = () => {
    const {text, min} = this.state
    if (text === false) {
      this.setState(prev => ({min: prev.min - 1}))
    } else {
      this.setState({min: {min}})
    }
  }

  tick = () => {
    const {text} = this.state

    if (text) {
      this.setState(prev => ({sec: prev.sec - 1}))
    }
  }

  minite = () => {
    const {sec, text, min} = this.state

    const endtime = sec === min * 60

    if (sec === -1 && text === true) {
      this.setState(prev => ({min: prev.min - 1}))
      this.setState({sec: 59})
    }

    if (endtime) {
      this.setState({sec: '0', min: '0', text: false})
      clearInterval(this.timer)
    }
  }

  change = () => {
    this.setState(prev => ({text: !prev.text}))
  }

  reset = () => {
    this.setState({sec: 0, min: 25, text: false})
  }

  render() {
    const {sec, min, text} = this.state
    const ss = sec > 9 ? sec : `0${sec}`
    const mm = min > 9 ? min : `0${min}`

    const img = text
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    return (
      <div className="main">
        <h1>Digital Timer</h1>

        <div className="card">
          <div className="col cl">
            <div className="p1">
              <h1 className="fnt">
                {mm}:{ss}
              </h1>
              <p className="ftt">{text ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="row">
                <button className="btn ftt" type="button" onClick={this.change}>
                  <img
                    src={img}
                    alt={text ? 'pause icon' : 'play icon'}
                    className="mg"
                  />
                  {text ? 'Pause' : 'Start'}
                </button>
              </div>

              <div className="row">
                <button type="button" className="btn ftt" onClick={this.reset}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="mg"
                  />
                  Reset
                </button>
              </div>
            </div>
            <div className="col">
              <p className="time">Set Timer Limit</p>
              <div className="row">
                <button
                  className="btn ftt"
                  type="button"
                  onClick={this.contminus}
                >
                  -
                </button>
                <p className="p2">{min}</p>
                <button
                  className="btn ftt"
                  type="button"
                  onClick={this.contplus}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
