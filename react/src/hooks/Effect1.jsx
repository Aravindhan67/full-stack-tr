import React,{useState,useEffect} from 'react'

const Effect1 = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },2000)
  },[count])
      const handleIncrement=()=>{
          setCount(count+1);
      }
      const handleDecrement=()=>{
          setCount(count-1);
      }
      const handleReset=()=>{
          setCount(0);
      }
    return (
      <div>
          <h1>{count}</h1>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>Increment</button>
      </div>
      )
}

export default Effect1