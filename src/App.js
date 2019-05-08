import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <NavBar/>
     </div>
  );
}

class NavBar extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

export default App;
