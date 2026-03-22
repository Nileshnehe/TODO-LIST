import React from 'react'
import "./todoform.css"
const TodoForm = () => {
  return (
    <div className='form-container'>
      <form>
        <div className="form-wrapper">
          <div className="form-input-row">
            <input 
            type="text"
             className='task-input'
             placeholder='Write Your Task Here...'
             autoComplete='off'
             name='task'
             />
          </div>
          <div>
          <button className='add-btn'>Add Task</button>
        </div>
        </div>
        
      </form>
    </div>
  )
}

export default TodoForm