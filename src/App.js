import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FeeType from "./pages/FeeType";
import FeeTypeDetail from "./pages/FeeTypeDetail";
import FeeTypeEdit from "./pages/FeeTypeEdit";
import FeeTypeCreate from "./pages/FeeTypeCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeeType />} />
        <Route path="/fee-type-create" element={<FeeTypeCreate />} />
        <Route path="/fee-type-detail/:id" element={<FeeTypeDetail />} />
        <Route path="/fee-type-edit/:id" element={<FeeTypeEdit />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
