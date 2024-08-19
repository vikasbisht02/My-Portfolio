import "./Layout.css";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Home from "../../pages/Home/Home";
import Menu from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const HandleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="landingPage">
        <div className={toggle ? "sidebarToggle sidebar" : "sidebar"}>
          <div className="sidebarToggleIcon">
            <p onClick={HandleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <Home />
      </div>
    </div>
  );
};

export default Layout;
