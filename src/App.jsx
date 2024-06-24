import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Step0 from "./pages/Step0";
import Step1 from "./pages/Stap1";
import Step2 from "./pages/Step2";
import Movie from "./pages/Movie";
import Plans from "./pages/Plans";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/registration" element={<Step0 />} />
        <Route path="/signup/regform" element={<Step1 />} />
        <Route path="/signup" element={<Step2 />} />
        <Route path="/signup/planform" element={<Plans />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
};

export default App;
