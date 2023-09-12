import React from 'react';
// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = "Elena";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;

  return (
    // <React.Fragment>
    // css 파일 사용할때
   // <div className='App'>
  // style 태그 사용할떄
    <div style={style.App}>
      <MyHeader/>
        <h2 style={style.h2}>Hi react {name}</h2>
      <b style={style.bold_text} id='bold_text'>React.js
      {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
      </div>
   // </React.Fragment>
  );
}


export default App;
