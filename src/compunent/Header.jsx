import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'

const Header = () => {

  const result = useSelector((state)=> state.producttlists);
  console.log(result)
  localStorage.setItem("user", JSON.stringify(result))

  return (
    <div className='h-main'>
      <h1>
        TOTAT CART <span style={{color: "white"}}>{result.length}</span>
      </h1>
    </div>
  )
}

export default Header
