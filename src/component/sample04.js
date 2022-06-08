import React from 'react'

function Sample04(props){
  // console.log(props)
return (
  <div>
    <h1>sample04</h1> 
    <ul>
      {
        props.title.map((item,index) => (<li key={index}>{item}</li>))
        }
    </ul>
  </div>
)

}

export default Sample04