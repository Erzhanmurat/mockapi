import Homepage from "./components/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Students from "./components/Students";

function App() {
  return (
    <div>
       <BrowserRouter >
          <Routes>
             <Route path="/" element={<Homepage />} />
             <Route path="/students" element={<Students />} />
          </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
