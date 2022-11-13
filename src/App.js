import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddMember from "./Pages/Home/AddMember";
import Home from "./Pages/Home/Home";
import GoogleLogin from "./Pages/Login/GoogleLogin";
import RequireAuth from "./Pages/Login/RequireAuth";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import NoMatch from "./Shared/NoMatch";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<GoogleLogin />} />

        <Route
          path="/add-member"
          element={
            <RequireAuth>
              <AddMember />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NoMatch></NoMatch>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
