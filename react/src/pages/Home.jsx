import React from 'react'
import About from './About'
import rocky from '../assets/rocky.png'
const home = ({items,users}) => {
  return (
    <div>
      <About items={items} users={users}/>
      <img src={rocky} alt="stone" />
    </div>
  )
}
export default home