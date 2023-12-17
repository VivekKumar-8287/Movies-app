import React from 'react'


function Navbar() {
  return (
    <div className='nav'>
        <div className='search-container'>
            <input type="text" className='search-input'/>
            <button id="search-btn">Search</button>
        </div>
    </div>
  )
}

export default Navbar