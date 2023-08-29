// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {min: 25, sec: 59, count: 24, text: false}

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
    this.timer = setInterval(this.minite, 1000)
  }

  componentWillUnmount() {
    const {sec, min} = this.state

    clearInterval(this.timer)
  }

  contplus = () => {
    const {text, count} = this.state
    if (text === false) {
      this.setState({min: count})
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  contminus = () => {
    const {text, count} = this.state
    if (text === false) {
      this.setState({min: count})
      this.setState(prev => ({count: prev.count - 1}))
    }
  }

  tick = () => {
    const {text} = this.state
    const {sec} = this.state

    if (text) {
      this.setState(prev => ({sec: prev.sec - 1}))
    }
  }

  minite = () => {
    const {min, sec, count} = this.state

    if (sec === 0) {
      this.setState(prev => ({min: prev.min - 1}))
      this.setState({sec: 59})
    }

    const endtime = sec === min * 60

    if (endtime) {
      this.setState({sec: '0', min: '0'})
    }
  }

  change = () => {
    const {count, min, text, sec} = this.state

    this.setState(prev => ({text: !prev.text}))
    if (sec === 0) {
      this.setState(prev => ({min: prev.min - 1}))
      this.setState({sec: 59})
    }
  }

  reset = () => {
    const {count, min, sec} = this.state
    this.setState({sec: 0})
    this.setState({min: 26})
  }

  render() {
    const {sec, min, text, count} = this.state
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
              <p className="fnt">
                {mm}:{ss}
              </p>
              <p className="ftt">{text ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="row">
                <button className="btn" type="button" onClick={this.change}>
                  <img
                    src={img}
                    alt={text ? 'Running' : 'Paused'}
                    className="mg"
                  />
                </button>
                <p className="ftt">{text ? 'Pause' : 'Start'}</p>
              </div>

              <div className="row">
                <button type="button" className="btn" onClick={this.reset}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset-icon"
                    className="mg"
                  />
                </button>
                <p className="ftt">Reset</p>
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
