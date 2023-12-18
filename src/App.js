import HomePage from "./routes/home/home.component";
import { DefaultPageLayout } from "./layouts/default-layout/default-layout.component";
import { Routes, Route, } from "react-router-dom";
import ShopPage from "./routes/shop/shop.component";
import { SignInPage } from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="sign-in" element={<SignInPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
