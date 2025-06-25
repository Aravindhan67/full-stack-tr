import React,{useContext} from 'react'
import { Context } from '../hooks/Context'
const contact = () => {
  const user=useContext(Context)
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.phn}</h1>
    </div>
  )
}

export default contact