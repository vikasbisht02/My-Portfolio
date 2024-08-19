import { GiHamburgerMenu } from "react-icons/gi";
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
import "./Mobile.css";
import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

const Mobile = () => {
  const [open, setOpen] = useState(false);


  //Handle Navbar
  const handleOpen = () => {
    setOpen(!open);
  };

  //Handle Navbar
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size="30px"
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size="30px"
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open ? (
          <div className="mobile-nav-menus">
            <div className="navItems">
              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="educaton"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
              </div>

              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
              </div>

              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
              </div>
              <div className="navItem">
                <div className="navLink">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Mobile;
