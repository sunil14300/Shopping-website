
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Allproduct from "./pages/allproducts/Allproduct";
import SingleProduct from "./pages/single product/SingleProduct";
import Cart from "./pages/cart/Cart";


function App() {
  return(
    <>
 <Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/products" element={<Allproduct/>}/>
  <Route path="/products" element={<Allproduct/>}/>
  <Route path="/product/:id" element={<SingleProduct/>}/>
  <Route path="/cart" element={<Cart/>}/>
</Routes>
 </Router>

    
    </>
  )
}

export default App;
