import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import CreateJob from "./components/CreateJob";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<CreateJob />} />
                <Route path="/details" element={<JobDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
