import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import CardDetail from "./pages/CardDetail";
import AddEditTour from "./pages/AddEditTour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/admin/details/:id" element={<CardDetail />} />
        <Route path="/admin/addDetails" element={<AddEditTour />} />
        <Route path="/admin/updateDetails/:id" element={<AddEditTour />} />
      </Routes>
    </>
  );
}

export default App;
