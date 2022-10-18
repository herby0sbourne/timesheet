import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import CreateJob from "./components/CreateJob";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateJob />} />
                <Route path="/:id" element={<JobDetails />} />
                <Route path="/details" element={<CreateJob />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
