import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SharedLayout from "./pages/SharedLayout";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
