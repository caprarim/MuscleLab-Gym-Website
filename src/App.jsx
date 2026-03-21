import Home from "./home.jsx";
import About from "./about.jsx";
import MoreInfo from "./moreinfo.jsx";
import Memberships from "./memberships.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EndBar from "./endBar.jsx";
import MemberShipPlans from "./membershipplans.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/moreinfo" element={<MoreInfo></MoreInfo>}></Route>
          <Route
            path="/memberships"
            element={<Memberships></Memberships>}
          ></Route>
          <Route
            path="/joinMembership/:plan"
            element={<MemberShipPlans></MemberShipPlans>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
