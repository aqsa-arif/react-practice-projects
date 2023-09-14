import React from 'react'
import Card from '../UI/Card'
import classes from './ListUser.module.css';

const ListUsers = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {
                    props.userLists.map((user) => {
                        return <li key={user.id}>
                            {user.name.charAt(0).toUpperCase() + user.name.slice(1)} {user.age} years old
                        </li>
                    })
                }
            </ul>
        </Card>
    )
}

export default ListUsers
