import "./App.css";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Characters />
      </GlobalProvider>
    </div>
  );
}

export default App;
