import React, { useState } from "react";
import "./App.css";
import axios from 'axios'

const url = 'https://api.nasa.gov/planetary/apod?api_key=ptDJCasPgTBI6kg8fCc6vShrftTWeJNeLseoncJ3'


const App = () => {

axios.get(url)
.then(res => {
  const data = res;
  console.log(data)
})
.catch(err => {
  debugger
})
 

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
