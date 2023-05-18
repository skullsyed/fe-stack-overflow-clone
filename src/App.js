import logo from "./logo.svg";
import "./App.css";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginComponents from "./components/Login.components";
import SignupComponents from "./components/Signup.components";
import HomeComponents from "./components/Home.components";
function App() {
  return (
    <div className="App">
      <LoginComponents />
      {/* <HomeComponents /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupComponents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
