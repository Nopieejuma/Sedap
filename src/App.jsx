import "./assets/tailwind.css";
import React from "react";
// import Dashboard from "./pages/Dashboard";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
import { Route, Routes } from "react-router-dom";
// import Orders from "./pages/Orders";
const Orders = React.lazy(() => import("./pages/Orders"));
// import Customers from "./pages/Customer";
const Customers = React.lazy(() => import("./pages/Customer"));
// import NotFound from "./pages/NotFound";
const NotFound = React.lazy(() => import("./pages/NotFound"));
// import Error401 from "./pages/Error401";
const Error401 = React.lazy(() => import("./pages/Error401"));
// import Error403 from "./pages/Error403";
const Error403 = React.lazy(() => import("./pages/Error403"));
// import Error404 from "./pages/Error404";
const Error404 = React.lazy(() => import("./pages/Error404"));
// import MainLayout from "./layouts/MainLayout";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
// import AuthLayout from "./layouts/AuthLayout";
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
// import Login from "./pages/auth/Login";
const Login = React.lazy(() => import("./pages/auth/Login"));
// import Register from "./pages/auth/Register";
const Register = React.lazy(() => import("./pages/auth/Register"));
// import Forgot from "./pages/auth/Forgot";
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
import { Suspense } from "react";
import UsersTable from "./pages/User";
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
// import GuestLayout from "./layouts/GuestLayout";
import Dashboard1 from "./pages/guest/Dashboard1";
import Navbar from "./components/guest/Navbar";
import CekProduk from "./components/guest/cekProduk";
import AboutUs from "./components/guest/AboutUs";
import Menu from "./components/guest/Menu";
import Footer from "./components/guest/Footer";
import Gallery from "./components/guest/Gallery";
import Products from "./pages/Product";
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/*" element={<NotFound />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<UsersTable />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/Error401" element={<Error401 />} />
          <Route path="/Error403" element={<Error403 />} />
          <Route path="/Error404" element={<Error404 />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/Dashboard1" element={<Dashboard1 />} />
          <Route path="/CekProduk" element={<CekProduk />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Gallery" element={<Gallery />} />

          <Route path="/cekProduk" element={<cekProduk />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
