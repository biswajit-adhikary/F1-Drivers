import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Results from "./pages/Results/Results";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddDriver from "./pages/AddDriver/AddDriver";
import AddTeam from "./pages/AddTeam/AddTeam";
import AddResult from "./pages/AddResult/AddResult";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/race" element={<Results />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-driver" element={<AddDriver />} />
                <Route path="/add-team" element={<AddTeam />} />
                <Route path="/add-race" element={<AddResult />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
