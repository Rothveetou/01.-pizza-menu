import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <Header />
      <Dashboard />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
