import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TabContent extends Component {
  componentWillMount() {
    const {
      props: { title }
    } = this

    console.log(`TabContent: componentWillMount: '${title}'`)
  }

  componentDidMount() {
    const {
      props: { title }
    } = this

    console.log(`TabContent: componentDidMount: '${title}'`)
  }

  render() {
    const {
      props: { title }
    } = this

    console.log(`TabContent: render: '${title}'`)

    return (
      <div>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    )
  }
}

TabContent.propTypes = {
  title: PropTypes.string.isRequired
}

export default TabContent
