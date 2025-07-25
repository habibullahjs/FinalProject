import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
let router = createBrowserRouter(createRoutesFromChildren(
  <>
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
  </Route>
    <Route path="*" element={<Error/>}></Route>
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
