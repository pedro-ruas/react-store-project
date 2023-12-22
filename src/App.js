import HomePage from "./routes/home/home.component";
import { DefaultPageLayout } from "./layouts/default-layout/default-layout.component";
import { Routes, Route, } from "react-router-dom";
import ShopPage from "./routes/shop/shop.component";
import { AuthPage } from "./routes/auth/auth.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="auth" element={<AuthPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
