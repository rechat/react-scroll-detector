# react-scroll-detector

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Demo

#### [Live demo](http://rechat.github.io/react-scroll-detector/)

Local demo:

```
git clone https://github.com/rechat/react-scroll-detector.git
cd react-scroll-detector
npm i && npm start
```

## Installation

```
npm i react-scroll-detector --save
```

## Example

```javascript
import React from 'react'
import ReactScrollDetector from 'react-scroll-detector'

class App extends React.Component {
  handleScrollBottom() {
    console.log('On Scroll Bottom')
  }

  handleScrollTop() {
    console.log('On Scroll Top')
  }

  render() {
    return (
      <ReactScrollDetector
        debounceTime={500}
        accuracy={90}
        onScrollBottom={this.handleScrollBottom}
        onScrollTop={this.handleScrollTop}
      >
        <div style={{ minHeight: '500px', maxHeight: '500px', overflow: 'auto' }}>
          ...
        </div>
      </ReactScrollDetector>
    )
  }
}
```

## API

| Prop             |  Type      |  Description                                 |  Default     |
| ---              | ---        | ---                                          | ---          |
| onScrollBottom   | Function   |  Triggers when scroll reaches bottom         | (top) => {}  |
| onScrollTop      | Function   |  Triggers when scroll reaches top            | (top) => {}  |
| accuracy         | Number     |  Accuracy of detection                       | 90           |
| debounceTime     | Number     |  D etection debounce time in milli seconds   | 500          |


## License

MIT

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
