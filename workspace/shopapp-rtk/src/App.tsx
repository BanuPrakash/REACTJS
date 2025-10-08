import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Default from "./components/Default"
import NavbarComp from "./components/NavbarComp"
import MemoComp from "./components/MemoComp"

import { Suspense, lazy } from "react"
import Customers from "./components/Customers"


const CartComp = lazy(() => import("./components/CartComp"))
const ProductForm = lazy(() => import("./components/ProductForm"))

function App() {
  return (
    <Container>
      <NavbarComp />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<div>Loading Cart...</div>}>
            <CartComp />
          </Suspense>
        } />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/form" element={
          <Suspense fallback={<div>Loading form...</div>}>
            <ProductForm />
          </Suspense>} />
        <Route path="/memo" element={<MemoComp />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Container>
  )
}

export default App
