import "./Projects.css";
import noteApp from "../../assets/images/noteApp.png"
import gemini from "../../assets/images/gemini.png"
import animations from "../../assets/images/animations.png"

const Projects = () => {
  return (
    <>
      <div className="projects container" id="projects">
        <div className="col-12 mt-3 mb-1  ">
          <h2 className="text-center text-uppercase"> Top Recent Projects</h2>
          <hr />
          <p className="p-3 text-center">
            Here are my top 3 recent project with live links and source code
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestias voluptatum consectetur, placeat possimus at ipsum eum,
            quaerat repudiandae dolor alias iusto quos voluptas, aperiam
            consequuntur odit quia est. Quasi. Iusto dolore repellendus nobis!
            Minima earum illum exercitationem nobis provident, suscipit ipsam
            quaerat, cumque, dolore minus fugit sit officiis est excepturi.
            Dolores blanditiis, excepturi porro illum fuga alias fugit animi.
          </p>
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack </span>
                  <img
                    src={noteApp}
                    alt="Project1"
                  />
                </div>

                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Taiwind CSS</span>
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Authentication</span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title ">
                    <h6 className="text-uppercase">Notes App</h6>
                  </div>
                  <a className="ad-btn" href="https://online-notes-inky.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend </span>
                  <img
                    src={gemini}
                    alt="Project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Google Gemini API</span>
                  <span className="card-detail-badge">Context API </span>
                  <span className="card-detail-badge">Google Generative AI</span>
                
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h6 className="text-uppercase">Google Gemini Clone</h6>
                  </div>
                  <a className="ad-btn" href="https://google-gemini-clone-sand.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend </span>
                  <img
                    src={animations}
                    alt="Project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScipt</span>
                  <span className="card-detail-badge">Gsap, Locomotive</span>
                  <span className="card-detail-badge">threeJS, ScrollTrigger</span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h6 className="text-uppercase">Animation Website</h6>
                  </div>
                  <a className="ad-btn" href="https://animation-websites-xw15.vercel.app/">
                    View
                  </a>
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
