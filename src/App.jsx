import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Sub1 from "./Pages/Sub1";
import Sub2 from "./Pages/Sub2";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sub1" element={<Sub1 />} />
            <Route path="sub2" element={<Sub2 />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
