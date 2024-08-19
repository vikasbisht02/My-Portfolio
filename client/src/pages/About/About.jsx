import "./About.css";
import Image from "../../assets/images/vikas1.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image ">
            <img src={Image} alt="" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hello, I am Vikas, a fresher software developer with a knack for
              crafting intuitive web applications. My journey began with a
              degree in Bechalre Of Computer Application(BCA) from Shri Guru Ram
              Rai University Dehradun Uttarakhand. I am a Mern Stack Developer .
              Where am working on good projects and finding a Internship
              Outside of coding, I love traveling and exploring new area.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
