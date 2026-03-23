import React, { useState } from 'react'
import "./tabs.css"

const Tabs = () => {

  const [selectedTab, setSelectedTab] = useState("All")
  const tabs = ["All", "Active", "Completed"]
  return (
    <div className='tabs-container'>
      <ul className='tabs-list'>
        {tabs.map((tab) => (
          <li 
          className={selectedTab === tab ? `active` : ``}
          onClick={() => setSelectedTab(tab)}
          >
            {tab}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs