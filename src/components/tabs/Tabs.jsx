import React from 'react'
import "./tabs.css"

const Tabs = () => {
  return (
    <div className='tabs-container'>
      <ul className='tabs-list'>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </div>
  )
}

export default Tabs