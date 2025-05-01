import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CustomerServiceCard from "./components/CustomerServiceCard";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import PengalamanSlider from "./pages/PengalamanSlider";
import Breadcrumbs from "./components/Breadcrumbs";
function App() {
  return (
    <Router>
      <Header />
      <main className="mx-auto">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/produk" element={<Product />} />
          <Route path="/pengalaman" element={<PengalamanSlider />} />
        </Routes>
      </main>
      <Footer />
      <CustomerServiceCard />
    </Router>
  );
}

export default App;
