import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Orders from "./pages/orders";
import Account from "./pages/account";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/orders" index element={<Orders />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
