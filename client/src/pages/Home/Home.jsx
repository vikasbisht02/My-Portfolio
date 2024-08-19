/* eslint-disable react/no-unescaped-entities */
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/vikasResume.pdf";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const themeHandle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={themeHandle}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size="15px" />
          ) : (
            <BsFillSunFill size="15" />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              href="https://api.whatsapp.com/send?phone=7536061132"
              className="btn btn-hire"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="vikasResume.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
