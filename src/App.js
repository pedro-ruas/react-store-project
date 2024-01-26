import HomePage from "./routes/home/home.route";
import { DefaultPageLayout } from "./layouts/default-layout/default-layout.component";
import { Routes, Route, } from "react-router-dom";
import ShopPage from "./routes/shop/shop.route";
import { AuthPage } from "./routes/auth/auth.route";
import { CartPage } from "./routes/cart/cart.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="auth" element={<AuthPage />}></Route>
        <Route path="cart" element={<CartPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
