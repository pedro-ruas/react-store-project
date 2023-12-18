import HomePage from "./routes/home/home.component";
import { DefaultPageLayout } from "./layouts/default-layout/default-layout.component";
import { Routes, Route, } from "react-router-dom";
import ShopPage from "./routes/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
