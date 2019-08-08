import React from 'react';
import './App.css';
import MyComponent from './components/format'
import Moment from 'react-moment';
import 'moment-timezone';

class App extends React.Component {
  render(){
  return (
    <div>
      <MyComponent />
    </div>
  );
}
}

export default App;
