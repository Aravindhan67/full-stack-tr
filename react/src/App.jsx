import React from 'react'
import Child from './components/Child'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Hooks from './pages/Hooks'
import Todo from './components/Todo'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Effect1 from './hooks/Effect1'
import Ref from './hooks/Ref'
import Reducer from './hooks/Reducer' 
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
      <Route path='/child' element={<Child/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/about' element={<About items={fruits} users={user}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/effect' element={<Effect/>}/>
      <Route path='/effect1' element={<Effect1/>}/>
      <Route path='/ref' element={<Ref/>}/>
      <Route path='/reducer' element={<Reducer/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App