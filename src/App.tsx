import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bill-bot-technology" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
