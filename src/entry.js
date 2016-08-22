import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/app'
import '.styles/app.scss'


render(<App/>, document.getElementById('main'))

// class HelloWorld extends Component {

//   render() {

//     return (
//       <div>
//         Hello World!
//       </div>
//     )
//   }
// }