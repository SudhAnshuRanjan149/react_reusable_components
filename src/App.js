// GLOBAL
import { BrowserRouter } from "react-router-dom";

// LOCAL
import Router from "./router/Router";
import Sidebar from "./layout/Sidebar/Sidebar";

// CSS
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
