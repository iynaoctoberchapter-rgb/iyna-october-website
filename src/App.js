import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from './Pages/HomePage';
import IssuesPage from './Pages/IssuesPage';
import HeaderComponent from "./Components/Common/HeaderComponent";
import FooterComponent from "./Components/Common/FooterComponent";
import ProgramPage from "./Pages/ProgramPage";
import BrainBlitzPage from "./Pages/BrainBlitzPage";
import ContactPage from "./Pages/ContactPage";
import PublishPage from "./Pages/PublishPage";
import LoadingComponent from "./Components/Common/LoadingComponent";
import ScrollToTop from "./Components/Common/ScrollToTop";
import SuccessPage from "./Pages/SuccessPage";
import NotFoundPage from "./Pages/NotFoundPage";
import BrainBlitzFirstExam from "./Pages/BrainBlitzFirstExam";
import BrainBlitzSyllabus from "./Pages/BrainBlitzSyllabus";
import ApplicationForm from "./Pages/ApplicationForm";

function App() {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(true);
  const [loadingOpacity, setLoadingOpacity] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    setShowLoading(true);
    setLoadingOpacity(0); // Start hidden

    // Fade in after mount
    const fadeIn = setTimeout(() => {
      setLoadingOpacity(1);
    }, 10); // Small delay to trigger CSS transition

    // Fade out after delay
    const fadeOut = setTimeout(() => {
      setLoadingOpacity(0);
      setTimeout(() => {
        setShowLoading(false);
      }, 400); // Match CSS transition duration
    }, 1200);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [location]);

  return (
    <React.Fragment>
      <HeaderComponent />
      <ScrollToTop />
      <main>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={1000}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/Issues" element={<IssuesPage />} />
                <Route path="/Program" element={<ProgramPage />} />
                <Route path="/BrainBliTz" element={<BrainBlitzPage />} />
                <Route path="/BrainBliTz/training/First-exam" element={<BrainBlitzFirstExam />} />
                <Route path="/BrainBliTz/Syllabus" element={<BrainBlitzSyllabus />} />
                                <Route path="/BrainBliTz/Application" element={<ApplicationForm />} />
                <Route path="/Contact" element={<ContactPage />} />
                <Route path="/Publish" element={<PublishPage />} />
                <Route path="/Success" element={<SuccessPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <FooterComponent />
      {showLoading && (
        <LoadingComponent
          style={{
            opacity: loadingOpacity,
            pointerEvents: loadingOpacity === 0 ? "none" : "auto",
            transition: "opacity 0.4s ease",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "rgba(255,255,255,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
      )}
    </React.Fragment>
  );
}

export default App;