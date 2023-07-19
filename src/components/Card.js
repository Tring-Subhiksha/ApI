import React from 'react'
import datas from "../database/db.json"
import "../styles/Card.css"

const Card = () => {
    const Data=datas
    return Data.map((items)=>{
        return (
            <div className='Container'>
            <div className='items'>
           
            <h2 className='headings'>{items.item}</h2>
              <img src={items.image} className='imgs'/>
              </div>
            </div>
          )
    })
  
}

export default Card
