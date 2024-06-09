import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Navbar className="" />
      <main className="min-h-[calc(100vh-120px)] mt-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
