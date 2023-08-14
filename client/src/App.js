import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Home";


function App() {
  return (
      <Routes>
          <Route path="/" exact element={<Landing />} />
      </Routes>
  );
}

export default App;
