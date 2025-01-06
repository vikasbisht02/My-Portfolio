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
            Hello, I am Vikas, a beginner software developer with a talent for creating easy-to-use web applications. My journey started with a degree in Bachelor of Computer Applications (BCA) from Shri Guru Ram Rai University, Dehradun, Uttarakhand. I am a MERN Stack Developer, working on exciting projects and looking for an internship. Outside of coding, I enjoy traveling and discovering new places.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
