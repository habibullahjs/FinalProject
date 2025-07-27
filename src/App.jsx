import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Shop from "./pages/Shop"
import Erorr from "./Erorr"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
let router = createBrowserRouter(createRoutesFromChildren(
  <>
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
    <Route path="*" element={<Erorr/>}></Route>
  </>
))
function App() {
 
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  )
}

export default App
