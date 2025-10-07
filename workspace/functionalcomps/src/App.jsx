import { useState } from "react"
import Counter from "./components/Counter"
import Users from "./components/Users"
import UserDetails from "./components/UserDetails";

function App() {
  let [currentId, setCurrentId] = useState(1);
  return (
    <div>
      {/* <Counter /> */}
      Current ID : {currentId}
      <Users setUid={setCurrentId}/>
      <UserDetails currentId={currentId} />
    </div>
  )
}

export default App
