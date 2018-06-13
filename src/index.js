import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'

export default class ReactScrollDetector extends React.Component {
  static propTypes = {
    onScrollTop: PropTypes.func,
    onScrollBottom: PropTypes.func,
    accuracy: PropTypes.number,
    debounceTime: PropTypes.number
  }

  static defaultProps = {
    onScrollTop: () => {},
    onScrollBottom: () => {},
    accuracy: 90,
    debounceTime: 500
  }

  constructor(props) {
    super(props)

    this.onScroll = debounce(this.onScroll, this.props.debounceTime)
  }

  onScroll(el) {
    const { accuracy, onScrollBottom, onScrollTop } = this.props
    const top = el.scrollTop - el.clientTop
    const end = el.scrollHeight - el.offsetHeight

    if (top >= end - accuracy) {
      this.lastScrollTop = top

      return onScrollBottom(top)
    }

    const isScrolledToTop = top < this.lastScrollTop

    this.lastScrollTop = top

    if (isScrolledToTop && top <= accuracy) {
      onScrollTop(top)
    }
  }

  render() {
    return (
      <div onScroll={e => this.onScroll(e.target)}>{this.props.children}</div>
    )
  }
}
