import "./App.css"
import TodoForm from './components/todofrom/TodoForm'
import TodoList from './components/todolist/TodoList'
import Tabs from './components/tabs/Tabs'

const App = () => {
  return (
    <div className='container'>
      <div className='title'> TODO List </div>
      <TodoForm />
      <Tabs />
      <TodoList />
      
    </div>
  )
}

export default App