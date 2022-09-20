import React, { useContext} from 'react'
import TestContext from "./TestContext"

function ChildOne() {
    const value = useContext(TestContext)
  return (
    <div>I have {value} tomatoes in my house!</div>
  )
}

export default ChildOne