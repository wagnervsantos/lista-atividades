import { useState } from 'react'
import './App.css'
import Todo from './componets/Todo'
import TodoForm from './componets/TodoForm'
import Search from './componets/Search'
import Filter from './componets/Filter'

function App() {
 const [todos, setTodos] = useState([
  {
    id: 1,
    text: 'Criar um progamação diaria',
    category: 'Tafera de casa',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Dedicar ao Trabalho',
    category: 'Trabalho',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Ir a Academia',
    category: 'Atividade fisica',
    isCompleted: false,
  },
 ])
 const [search, setSearch] = useState("")
 const [filter, setFilter] = useState("All")
 const [sort, setSort ] = useState("Asc")

 const addTodo = (text, category) => {
  const newTodos = [
    ...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }
  ]
  setTodos(newTodos);
 }
const removeTodo = (id) => {
  const newTodos = [...todos];
  const filteredTodos = newTodos.filter((todo) => 
  todo.id !== id ? todo : null
  );
  setTodos(filteredTodos)
}
 const completeTodo = (id) => {
  const newTodos = [...todos]
 
  newTodos.map((todo) => 
  todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newTodos)
 }

 return <div id='app'>
   <h1>Minhas lista de tarefas</h1>
   <Search search={search} setSearch={setSearch} />
   <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
  <div id='todo-list'>
    {todos
    .filter((todo)=> 
    filter === "All"
    ? true: 
    filter === "Completed" ?
     todo.isCompleted : 
     !todo.isCompleted
    )
    .filter((todo) => 
    todo.text.toLocaleLowerCase()
    .includes(search.toLocaleLowerCase())
    )
    .sort((a, b) => 
    sort === "Asc"
    ? a.text.localeCompare(b.text)
    : b.text.localeCompare(a.text)
    )
    .map((todo) => (
      <Todo
       key={todo.id}
        todo={todo} 
        removeTodo={removeTodo} completeTodo={completeTodo} />
      
    ))}
  </div>
  <TodoForm addTodo={addTodo}/>
 </div>
}

export default App
