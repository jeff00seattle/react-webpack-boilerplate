import React, { Component } from 'react'
import { Tabs } from '@olive/react'

import TabContent from './TabContent'

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
            <TabContent title="Tab 1 Content" />
          </Tabs.Tab>
          <Tabs.Tab
            label="tab two"
            onClick={() => this.handleSelect(1)}
            selected={selectedIndex === 1}
          >
            <TabContent title="Tab 2 Content" />
          </Tabs.Tab>
          <Tabs.Tab
            label="tab three"
            onClick={() => this.handleSelect(2)}
            selected={selectedIndex === 2}
          >
            <TabContent title="Tab 3 Content" />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default App
