import React, { useEffect, useState } from 'react'
import TodoItem from './Todo-item'

const TodoList = () => {
    const [todoList,setTodoList]=useState([])
    const [loading,setLoading]=useState(false)


    const fetchListOfTodos=async()=>{
        try {
            setLoading(true)
            const response=await fetch('https://dummyjson.com/todos')
            const data=await response.json()
            console.log(data.todos)
            if(data.todos && data?.todos.length>0){
                setTodoList(data.todos)
                setLoading(false)
            }else{
                console.log('No data found')
                setLoading(false)
                return
            }
           
          
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
fetchListOfTodos()
    },[])
    console.log(todoList)
    if(loading) return <h1 className='text-3xl flex justify-center items-center text-green-400'>Fetching todos please wait</h1>
  return (
    <div><h1 className='text-xl font-bold text-center my-5'>TodoList</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>

        {todoList && todoList.length>0?(
            todoList.map(todo=>(
                <TodoItem data={todo} key={todo.id} />
            ))
        ):<h1>No data found</h1>}
        </div>

    </div>
  )
}

export default TodoList