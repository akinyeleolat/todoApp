/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Todo = ({ index, todo, completeTodo, removeTodo }) => {
  return (<div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className ='todo'>
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>

    </div>
  </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [ value, setValue ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='input' value={value} placeholder='add todos ...' onChange = {e => setValue(e.target.value)}/>
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn About Hooks',
      isCompleted: false
    },
    {
      text: 'Learn About Styled Components',
      isCompleted: false
    },
    {
      text: 'Learn About Redux Hooks',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const NewTodos = [...todos, { text }]
    setTodos(NewTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => {
          return <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        }
        )}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App
