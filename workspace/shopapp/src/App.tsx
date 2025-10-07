import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import ProductList from "./components/ProductList"
import CartComp from "./components/CartComp"
import Details from "./components/Details"
import ProductForm from "./components/ProductForm"
import Default from "./components/Default"
import NavbarComp from "./components/NavbarComp"

function App() {
  return (
    <Container>
      <NavbarComp />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartComp />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/form" element={<ProductForm />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Container>
  )
}

export default App
