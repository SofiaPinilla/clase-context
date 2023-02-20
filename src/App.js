import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { GlobalProvider } from "./context/GlobalState";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import "./bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search/:text" element={<Search/>}/>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
