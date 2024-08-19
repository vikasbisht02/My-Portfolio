import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import "./App.css";
import Mobile from "./components/Mobile/Mobile";

import { ToastContainer } from "react-toastify";


const App = () => {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer/>
        <Mobile />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-2">
          <h4 className="text-center">Made with👍Vikas &copy; 2024</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="grey"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
};

export default App;
