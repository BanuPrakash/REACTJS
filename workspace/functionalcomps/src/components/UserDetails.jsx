import React, { useEffect, useState } from 'react'

export default function UserDetails({ currentId }) {
    let [user, setUser] = useState();

    // componentDidUpdate()
    useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users/' + currentId)
        .then(response => response.json())
        .then(data => setUser(data));
    }, [currentId])

    return (
        <div>
            <h1>UserDetails</h1>
            {
                user && (
                    <div>
                        {user.website} <br />
                        {user.company.name} <br />
                    </div>
                )
            }    
        </div>
    )
}
