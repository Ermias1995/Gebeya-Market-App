import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import Under from "./pages/Under";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="under" element={<Under/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
