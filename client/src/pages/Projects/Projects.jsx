import "./Projects.css";
import linkedIn from "../../assets/images/linkedIn.png";
import auth from "../../assets/images/auth.png";
import gemini from "../../assets/images/gemini.png";

const Projects = () => {
  return (
    <>
      <div className="projects container" id="projects">
        <div className="col-12 ">
          <h2 className="text-center text-uppercase"> Top Recent Projects</h2>
          <hr />
          <p className="text-center">
            Here are my top 5 recent projects, complete with live links and
            source code for you to explore:
          </p>
          <div className="row" id="ads">
            <div className="col-md-4 mb-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack </span>
                  <img src={linkedIn} alt="Project1" />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Taiwind CSS</span>
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">
                    Authentication with JWT
                  </span>
                  <span className="card-detail-badge">
                    Emails using Nodemailer
                  </span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title ">
                    <h6 className="text-uppercase mt-3">LinkedIn Clone</h6>
                  </div>
                  <div>
                    <a
                      className="ad-btn"
                      href="https://linkedin-clone-i11c.onrender.com/login"
                    >
                      View
                    </a>
                    <a
                      className="ad-btn mt-2"
                      href="https://github.com/vikasbisht02/LinkedIn-Clone/tree/48438387bcb8c1c5e318e038c1a5abfb8c2676ae"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack </span>
                  <img
                    src="https://i.ibb.co/fXmZdnz/Screenshot-10.png"
                    alt="Project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Taiwind CSS</span>
                  <span className="card-detail-badge">Daisy UI</span>
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">
                    Authentication with JWT
                  </span>
                  <span className="card-detail-badge">
                    Real Time Chat using Socket.io
                  </span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h6 className="text-uppercase  mt-3">Chat App Clone</h6>
                  </div>

                  <div>
                    <a
                      className="ad-btn"
                      href="https://chat-app-w1hd.onrender.com/login"
                    >
                      View
                    </a>
                    <a
                      className="ad-btn mt-2"
                      href="https://github.com/vikasbisht02/Chat-App"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack </span>
                  <img
                    src="https://cdn.buymeacoffee.com/uploads/rewards/2024-03-14/1/114451_Full_Stack_Food_Delivery_Website_Using_React_JS_Step_by_Step_Tutorial.png@1200w_0e.png"
                    alt="Project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Taiwind CSS</span>
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">
                    Authentication with JWT
                  </span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h6 className="text-uppercase  mt-3">
                      Food Delivery App Clone
                    </h6>
                  </div>
                  <div className="view_btn">
                    <a
                      className="ad-btn"
                      href="https://food-delivery-app-frontend-zn5p.onrender.com/"
                    >
                      View_Client_Panel
                    </a>

                    <a
                      className="ad-btn mt-2"
                      href="https://food-delivery-app-admin-waho.onrender.com/"
                    >
                      View_Admin_Panel
                    </a>
                    <a
                      className="ad-btn mt-2"
                      href="https://github.com/vikasbisht02/Food-Delivery-App"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack </span>
                  <img src={auth} alt="Project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Framer-Motion</span>
                  <span className="card-detail-badge">Taiwind CSS</span>
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">
                    Authentication with JWT
                  </span>
                  <span className="card-detail-badge">
                    Sending emails using Nodemailer
                  </span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h6 className="text-uppercase  mt-3">
                      Authentication app Clone
                    </h6>
                  </div>
                  <div className="view_btn">
                    <a
                      className="ad-btn mb-1"
                      href="https://authentication-app-client-tau.vercel.app"
                    >
                      View
                    </a>
                    <a className="ad-btn mt-2" href="https://github.com/vikasbisht02/Authentication-App">Source Code</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend </span>
                  <img src={gemini} alt="Project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>

                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Context API</span>
                  <span className="card-detail-badge">Google Gemini API</span>
                  <span className="card-detail-badge">Context API</span>
                  <span className="card-detail-badge">
                    Google Generative AI
                  </span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h6 className="text-uppercase  mt-3">
                      Google Gemini Clone
                    </h6>
                  </div>
                  <div className="view_btn">
                    <a
                      className="ad-btn"
                      href="https://google-gemini-clone-sand.vercel.app/"
                    >
                      View
                    </a>
                    <a
                      className="ad-btn mt-2"
                      href="https://github.com/vikasbisht02/Google-Gemini-Clone"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
