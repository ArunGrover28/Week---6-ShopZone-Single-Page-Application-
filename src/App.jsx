import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./pages/Login.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar />
        <Home/>
      </div>
    },
    {
      path:"/shop",
      element: <div>
        <Navbar />
        <Shop />
      </div>
    },
    {
      path:"/contact",
      element: <div>
        <Navbar />
        <Contact />
      </div>
    },
    {
      path:"/product/:id",
      element: <div>
        <Navbar />
        <ProductDetail />
      </div>
    },{
      path:"/cart",
      element: <div>
        <Navbar />
        <Cart />
      </div>
    },{
      path:"/login",
      element: <div>
        <Navbar />
        <Login />
      </div>
    },{
  path: "/checkout",
  element: (
    <div>
      <Navbar />
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    </div>
  )
}

  ]
)

function App() {

  return (
    <UserProvider>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
    </UserProvider>
  )
}

export default App
