import CustomerList from "./components/CustomerList"
import ParentComponent from "./trial/ParentComponent"

// Functional Component returns JSX
function App() {
  return (
    <div>
      <h1>Customer Application!!!</h1>
      {/* <CustomerList /> */}
      <ParentComponent />
    </div>
  )
}

export default App
