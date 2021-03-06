import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Footer />
    </div>
  );
}

export default App;
