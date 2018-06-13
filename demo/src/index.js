import React, { Component } from 'react'
import { render } from 'react-dom'

import ReactScrollDetector from '../../src'
import '../styles/main.css'

class Demo extends Component {
  state = {
    log: [],
    accuracy: 90
  }

  handleScrollBottom = () => this.addLog('Scrolled to Bottom !')
  handleScrollTop = () => this.addLog('Scrolled to Top !')

  addLog = text => {
    const { log } = this.state

    this.setState({
      log: [text, ...log]
    })
  }

  render() {
    const { accuracy } = this.state

    return (
      <div>
        <h1>
          react-scroll-detector Demo <span>👍</span>
        </h1>

        <div className="row">
          <div className="log">
            <p>Log:</p>
            {this.state.log.map((log, index) => <div key={index}>{log}</div>)}
          </div>

          <div className="config">
            <div>
              Accuracy:{' '}
              <input
                type="range"
                min="0"
                max="100"
                value={accuracy}
                onChange={e => this.setState({ accuracy: e.target.value })}
              />
              {accuracy}px
            </div>

            <div>Debounce: 500ms</div>
          </div>
        </div>

        <ReactScrollDetector
          accuracy={accuracy}
          onScrollBottom={this.handleScrollBottom}
          onScrollTop={this.handleScrollTop}
        >
          <div className="container">
            {Array.from({ length: 30 }, (_, index) => (
              <div key={index} className="item">
                Item {index + 1}
              </div>
            ))}
          </div>
        </ReactScrollDetector>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
