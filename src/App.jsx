import "./App.css";

import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import ResidentLogin from "./pages/resident/ResidentLogin";
import ResidentDashboard from "./pages/resident/ResidentDashboard";
import ResidentInvite from "./pages/resident/ResidentInvite";
import ResidentRequests from "./pages/resident/ResidentRequests";
import ResidentQRPass from "./pages/resident/ResidentQRPass";
import ResidentInside from "./pages/resident/ResidentInside";
import ResidentHistory from "./pages/resident/ResidentHistory";
import ResidentProfile from "./pages/resident/ResidentProfile";
import ResidentTrustedPeople from "./pages/resident/ResidentTrustedPeople";
import ResidentAddTrustedPerson from "./pages/resident/ResidentAddTrustedPerson";
import ResidentTrustedPersonDetails from "./pages/resident/ResidentTrustedPersonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        <Route
          path="/login"
          element={<ResidentLogin />}
        />

        <Route
          path="/resident"
          element={<ResidentDashboard />}
        />

        <Route
          path="/resident/invite"
          element={<ResidentInvite />}
        />

        <Route
          path="/resident/requests"
          element={<ResidentRequests />}
        />

        <Route
          path="/resident/qr-pass"
          element={<ResidentQRPass />}
        />

        <Route
          path="/resident/inside"
          element={<ResidentInside />}
        />

        <Route
          path="/resident/history"
          element={<ResidentHistory />}
        />

        <Route
          path="/resident/profile"
          element={<ResidentProfile />}
        />

        <Route
          path="/resident/trusted-people"
          element={<ResidentTrustedPeople />}
        />

        <Route
          path="/resident/trusted-people/add"
          element={<ResidentAddTrustedPerson />}
        />

        <Route
          path="/resident/trusted-people/details"
          element={<ResidentTrustedPersonDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;