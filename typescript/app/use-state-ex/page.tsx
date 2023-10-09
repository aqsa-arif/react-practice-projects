"use client";

import { userType } from '@/types/user.type';
import { useState } from 'react'

const UseStatEx = () => {
    const [Username, setUsername] = useState<string>("");
    const [user, setUser] = useState<userType | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name: Username,
            sessionId: Math.random()
        }) 
    }

    return (
        <div className="useStateExample">
            {user ? (
                `${user.name} logged in with ID of ${user.sessionId} `
            ) : (
                <form>
                    <input type="text" placeholder="Username" name='name' onChange={handleChange} />
                    <button onClick={handleClick}>Login</button>
                </form>
            )}
            {/* BE AWARE */}
            {user?.name}
        </div>
    )
}

export default UseStatEx
