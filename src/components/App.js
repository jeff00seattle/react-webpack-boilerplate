import React, { Component } from 'react'
import { Tabs } from '@olive/react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedIndex: 0 }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(index) {
    this.setState({ selectedIndex: index })
  }

  render() {
    const { selectedIndex } = this.state
    return (
      <div>
        <Tabs>
          <Tabs.Tab
            label="tab one"
            onClick={() => this.handleSelect(0)}
            selected={selectedIndex === 0}
          >
            <h1>Tab 1 Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Tabs.Tab>
          <Tabs.Tab
            label="tab two"
            onClick={() => this.handleSelect(1)}
            selected={selectedIndex === 1}
          >
            <h1>Tab 2 Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Tabs.Tab>
          <Tabs.Tab
            label="tab three"
            onClick={() => this.handleSelect(2)}
            selected={selectedIndex === 2}
          >
            <h1>Tab 3 Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default App
