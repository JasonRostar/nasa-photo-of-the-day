import React from 'react'




export default function DataCard({ cardData }) {

  const someValue = 'loading...'
  const img = cardData.hdurl
 
    return (

        <div>
            <h1>{cardData.title}</h1>
            <div>{cardData.date}</div>
            <div><img src={img} alt={someValue} /></div>
            <div>{cardData.copyright}</div>
            <div>{cardData.explanation}</div>
        </div>

    );
}