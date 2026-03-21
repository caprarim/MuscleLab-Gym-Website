import Home from "./home.jsx";
import About from "./about.jsx";
import MoreInfo from "./moreinfo.jsx";
import Memberships from "./memberships.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import MemberShipPlans from "./membershipplans.jsx";

function App() {
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;
