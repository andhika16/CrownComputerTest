import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CustomerServiceCard from "./components/CustomerServiceCard";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </main>
      <Footer />
      <CustomerServiceCard />
    </Router>
  );
}

export default App;
