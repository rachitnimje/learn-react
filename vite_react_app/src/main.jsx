import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <>
//       <h1>Hello this is my own function</h1>
//     </>
//   )
// }

// const ReactElement = {
//   tag: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: "Click here to visit google"
// };

const name = "rachit";

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click here to visit google ',
  name
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
)
