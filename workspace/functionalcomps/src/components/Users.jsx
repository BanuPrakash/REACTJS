import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

export default function Users({setUid}) {
    let [users, setUsers] = useState();

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
    return (
        <div>
            <h1>Users</h1>
            {
                users && users.map(user => <UserCard 
                    user={user} 
                    setUid={setUid} 
                    key={user.id}/>)
            }
        </div>
    )
}
