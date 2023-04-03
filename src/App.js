import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { getQuotes } from "./services/quotes-api";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const quoteData = async () => {
      console.log("A");
      const data = await getQuotes();
      setQuote(data);
      console.log(data);
    };
    quoteData();
  }, []);

  return (
    <div className="App d-flex flex-column justify-center">
      <NavBar />

      <Home quote={quote} />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
