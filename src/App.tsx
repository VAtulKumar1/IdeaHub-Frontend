import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { ExploreIdeas } from "./components/ExploreIdeas";

function App() {
    return (
        <main className="absolute top-0 z-[-2] h-auto w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore-ideas" element={<ExploreIdeas />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
