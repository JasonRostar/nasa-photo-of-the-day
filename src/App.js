import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import DataCard from "./dataCard.js"


const url = 'https://api.nasa.gov/planetary/apod'
const apiKey = 'ptDJCasPgTBI6kg8fCc6vShrftTWeJNeLseoncJ3'



const App = () => {
  //set state
  const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`${url}?api_key=${apiKey}`)

      .then(res => {

        setData(res.data)
        console.log(res.data)

      })
      .catch(err => {
        console.log("not fetching any info")

      })

  }, [])

  return (
    <div className="App">
      <DataCard cardData={data} />

    </div>

  );
}
export default App;