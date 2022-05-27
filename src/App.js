import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {incrementCountAction} from './action';


function App({ incrementMyCount ,myCount}) {
  return (
    <div className="App">
      <h1>Lets learn react-redux-thunk</h1>
      <button 
      onClick={incrementMyCount}
      >
        {myCount}
      </button>
    </div>
  );
}

const mapStateToProps = state =>({
  myCount:state.count
});

const mapDispatchToProps = {
  incrementMyCount: incrementCountAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
