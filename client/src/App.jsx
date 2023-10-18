import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import { Home, Hotel } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
