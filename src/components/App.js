import React from 'react'

// [error  Component should be written as a pure function  react/prefer-stateless-function]
//
// import React, { Component } from 'react'
//
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>React Webpack Boilerplate!</h1>
//       </div>
//     )
//   }
// }

const App = () => (
  <div>
    <h1>React Webpack Boilerplate!</h1>
  </div>
)

export default App
