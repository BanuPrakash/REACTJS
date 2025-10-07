import React from 'react'

export default function UserCard({user, setUid}) {
 
  return (
    <div onMouseEnter={() => setUid(user.id)}>
       {user.name} {user.email} 
    </div>
  )
}
