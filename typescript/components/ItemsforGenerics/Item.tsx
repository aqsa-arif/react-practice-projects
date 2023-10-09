

type propsType<T> = {
    id: number,
    title: string,
    extra: T[]
}

const Item = ({id, title, extra} : propsType<object>) => {
    console.log(extra);
    
  return (
    <div>
      <h1>Item: {title}</h1> 
    </div>
  )
}

export default Item
