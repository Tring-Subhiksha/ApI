import React from 'react'
import "../styles/Api.css"

const Api = ({Items}) => {


  return (
    <div>
       <div className='api'>
      <div></div>
          {/* {console.log(itemslist)} */}
          {Items.map((items)=>{
            return(
            <div className='items' key={items.id}>
              <h2 className='heading'>{items.item}</h2>
             <img className='imgs' src={items.image}></img>
            </div>
          )})}
          </div>
    </div>
  )
}

export default Api
