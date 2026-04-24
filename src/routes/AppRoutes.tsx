import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </Layout>
  );
}
