import React from 'react'
import Item from './Item'

const ItemList = () => {
  return (
    <div>
      <Item 
       id={1}
       title={"Post Title"}
       extra={[
        { id: 1, username: "JOHN"}
       ]}
       
      />
    </div>
  )
}

export default ItemList
