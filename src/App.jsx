import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import Menu from "./Menu";
import Helloo from "./Helloo";
import Subscribee from "./Subscribee";
import SignIn from "./SignIn";
import Admin from "./Admin/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyUs />
              <HowItWorks />
              <Menu />
              <Helloo />
              <Subscribee />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
