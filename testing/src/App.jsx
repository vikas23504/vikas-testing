import React from 'react'

const App = () => {
  const handleclick = ()=>{
    alert("hy i am alert ")
  }
  return (
    <div>
      <h4>i am testing github command</h4>
      <button onClick={handleclick}>click me </button>
    </div>
  )
}

export default App
