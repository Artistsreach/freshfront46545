import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Documentation from "./components/Documentation";
import Blog from "./components/Blog";
import InvestorPackage from "./components/InvestorPackage";
import Playbook from "./components/Playbook";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/investorpackage" element={<InvestorPackage />} />
          <Route path="/playbook" element={<Playbook />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
