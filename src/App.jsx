import React from 'react'
import TodoList from './components/todos/TodoList'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <div>
      {/* <TodoList/> */}
      <Login/>
      <Register/>
    </div>
  )
}

export default App