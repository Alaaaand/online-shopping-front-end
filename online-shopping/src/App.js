import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componets/header/header.componet";
import { HomePage } from "./pages/homepage/homepage.componets";
import { ShopPage } from "./pages/shop/shop.componet";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />

      </Routes>
      
    </div>
  );
}

export default App;
