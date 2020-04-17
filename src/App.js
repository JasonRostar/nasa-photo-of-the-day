import React, { useState, useEffect } from "react";
import "./App.css";
import Button from './Button'
import axios from "axios"
import DataCard from "./dataCard.js"


const url = 'https://api.nasa.gov/planetary/apod'
const apiKey = 'ptDJCasPgTBI6kg8fCc6vShrftTWeJNeLseoncJ3'



const App = () => {
  //set state
  const [data, setData] = useState([])
  //use effect
  useEffect(() => {
    axios.get(`${url}?api_key=${apiKey}`)
  //response  
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  //error    
      .catch(err => {
        console.log(err, 'error')

      })
  //add empty array to stop useEffect loop    
  }, [])

//return DataCard w/ cardData prop attached w/ state{data}
  return (
    <div className="App">
      <DataCard cardData={data} />
      <Button >Styled<br></br>Component!</Button>  
    </div>

  );
}
export default App;