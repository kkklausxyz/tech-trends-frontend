import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import LanguagePage from "../pages/LanguagePage";
import PopularPage from "../pages/PopularPage";
import KeywordPage from "../pages/KeywordPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<LanguagePage />} />
      <Route path="languages" element={<LanguagePage />} />
      <Route path="popular" element={<PopularPage />} />
      <Route path="keywords" element={<KeywordPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
