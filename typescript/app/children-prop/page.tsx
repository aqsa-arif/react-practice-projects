import Child from "@/components/children/Child"
import SecondChild from "@/components/children/SecondChild"
import Parent from "@/components/children/Parent"


const ParentChildEx = () => {
  return (
    <div>
       <Parent >
         <Child />
         <SecondChild />
       </Parent>
    </div>
  )
}

export default ParentChildEx
