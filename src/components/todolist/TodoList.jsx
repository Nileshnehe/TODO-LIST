import React, { useEffect, useState } from 'react'
import "./todolist.css"
const TodoList = () => {

  const [tasks, setTasks] = useState([]);

  const data = [
    {
      id: 1,
      title: "My react Application first web",
      isCompleted: false,
    },
    {
      id: 2,
      title: "My react Application first web",
      isCompleted: false,
    },
    {
      id: 3,
      title: "My react Application first web",
      isCompleted: false,
    },
    {
      id: 4,
      title: "My react Application first web",
      isCompleted: false,
    },
  ]

  useEffect(() => {
    setTasks(data)
  }, []);

  console.log('tasks', tasks);

  return (
    <div className='list-container'>
      <ul className='list-items'>
        {tasks &&
          tasks?.length > 0 &&
          tasks?.map((task) => (
            <li className='list-item' key={`item_${task?.id}`}>
              <div className='list-title'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11.2929 12.1213L15.5355 7.87868L16.9497 9.29289L11.2929 14.9497L7.40381 11.0607L8.81802 9.64645L11.2929 12.1213Z"></path></svg>{task?.title}</div>
              <div className='list-task'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                </span>
              </div>
            </li>

          ))}

      </ul>
    </div>
  )
}

export default TodoList