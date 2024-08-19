/* eslint-disable react/prop-types */
import "./Menus.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";
import Image from "../../assets/images/vikas.jpg";
import { motion } from "framer-motion";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <div>
          <motion.div
            className="navbarProfilePPic"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Image} alt="ProfilePic" />
          </motion.div>
          <motion.div
            className="navItems"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="navItem">
              <div className="navLink">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="educaton" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
            </div>

            <div className="navItem">
              <div className="navLink">
                <Link to="tech" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>

            <div className="navItem">
              <div className="navLink">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div>
          <div className="navItems">
            <div className="navItem">
              <div className="navLink">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="educaton" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="tech" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                </Link>
              </div>
            </div>

            <div className="navItem">
              <div className="navLink">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                </Link>
              </div>
            </div>
            <div className="navItem">
              <div className="navLink">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
