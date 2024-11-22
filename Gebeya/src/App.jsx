import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from './pages/Cart'
import SharedLayout from "./pages/SharedLayout"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="kids" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
