import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Product from "./components/Product/Product";
import Categories from "./components/Categories/Categories";
import CounterContextProvider from "./Context/CounterContext";
import UserContextProvider from "./Context/UserContext";
import ProtectRoutes from "./components/ProtectRoutes/ProtectRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartContextProviver from "./Context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import WishContextProvider from "./Context/WishContext";
import WishList from "./components/WishList/WishList";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

function App() {
  let qclient = new QueryClient()
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Login /> },
        { path: 'Home', element: <ProtectRoutes><Home /></ProtectRoutes> },
        { path: 'Brands', element: <ProtectRoutes><Brands /></ProtectRoutes> },
        { path: 'Cart', element: <ProtectRoutes><Cart /></ProtectRoutes> },
        { path: 'WishList', element: <ProtectRoutes><WishList /></ProtectRoutes> },
        { path: 'Login', element: <Login /> },
        { path: '/ProductDetails/:id', element: <ProductDetails /> },
        { path: 'Checkout/:id', element: <ProtectRoutes><Checkout /></ProtectRoutes> },
        { path: 'Product', element: <ProtectRoutes><Product /></ProtectRoutes> },
        { path: 'Categories', element: <ProtectRoutes><Categories /></ProtectRoutes> },
        { path: 'Register', element: <Register /> },
        { path: 'ForgetPassword', element: <ForgetPassword /> },
        { path: '*', element: <NotFound /> },

      ]

    }


  ])
  return (
    <>
      <WishContextProvider>
        <CartContextProviver>
          <QueryClientProvider client={qclient}>
            <UserContextProvider>

              <CounterContextProvider>
                <Provider store={store}>
                  <RouterProvider router={routers} />
                </Provider>
              </CounterContextProvider>

            </UserContextProvider>

          </QueryClientProvider>
        </CartContextProviver>
      </WishContextProvider>



    </>
  );
}

export default App;
