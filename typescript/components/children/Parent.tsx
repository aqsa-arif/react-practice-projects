import React from 'react'

const Parent = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
        <p>This is Parent</p>
        {children}      
    </div>
  )
}

export default Parent
