import Image from 'next/image'
import { Fragment } from 'react' 
import PropsList from './post-list/page' 
import ParentChildEx from './children-prop/page'
import EventsEx from './events-eg/page'
import UseStatEx from './use-state-ex/page'
import UseContextExample from './use-context-eg/page'
import UseRefEx from './use-ref-ex/page'
import ItemList from '@/components/ItemsforGenerics/ItemList'
import ShapeList from '@/components/shapes/ShapeList'

export default function Home() {
  return (
    <Fragment >
        {/* <PropsList /> */}
        {/* <ParentChildEx /> */}
        {/* <EventsEx /> */}
        {/* <UseStatEx /> */}
        {/* <UseContextExample /> */}
        {/* <UseRefEx /> */}
        {/* <ItemList /> */}
        <ShapeList/>
    </Fragment>
  )
}
