import Homepage from "./components/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
       <BrowserRouter >
          <Routes>
             <Route path="/" element={<Homepage />} />
          </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
