// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//     } 
//   }

//   render () {
//     return (<div>
//       <h1>Reviews</h1>
//     </div>)
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx';

var Index = () => {
  return (
    <App />
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))