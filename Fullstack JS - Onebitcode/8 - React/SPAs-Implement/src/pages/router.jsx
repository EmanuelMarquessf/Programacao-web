import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import RootAdmLayout from "./RootAdmLayout";
import AdminHome from "./admin/Admin";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
import loadProduct from "../loaders/products";
import ProductBoundary from "../error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct,
        errorElement: <ProductBoundary />
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <RootAdmLayout />,
  },
]);

export default router;
