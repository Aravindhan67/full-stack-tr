import React from 'react'
import Child from './components/Child'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/login'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Hooks from './pages/Hooks'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Effect1 from './hooks/Effect1'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
const App = () => {
  var fruits=["Apple","Banana","Orange"]
  var user={username:"viky",password:"123456"}
  return (
    <>
    <div>{/*<Child name="kabesh" age="20"/><Child name="viky" age="26"/>
    <Home items={fruits} users={user}/>
    <Skills/>
    <Contact/>
    <Login users={user}/>
    <Counter/>*/}<Navbar/>
    <Routes>
      <Route path='/home' element={<Home items={fruits} users={user}/>}/>
      <Route path='/login' element={<Login users={user}/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/effect' element={<Effect/>}/>
      <Route path='/effect1' element={<Effect1/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App