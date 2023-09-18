import React, { useMemo } from 'react'
import classes from './DemoList.module.css'

const DemoList = (props) => {
    const { list } = props;
    console.log('DemoList render');

    const sortedList = useMemo(() => {
        console.log('Items sorted');
        return list.sort((a, b) => a - b)
    },[list]);    

    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {
                    sortedList.map((item, index) => {
                        return <li key={index}> {item} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default React.memo(DemoList);
