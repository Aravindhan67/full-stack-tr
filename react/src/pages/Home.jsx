import React from 'react'

const home = ({items,users}) => {
  return (
    <div>
      <ol type="i">{items.map((fruit)=>(<li>{fruit}</li>))}</ol>
      <h1>{users.username}</h1>
      <h1>{users.password}</h1>
    </div>
  )
}
export default home