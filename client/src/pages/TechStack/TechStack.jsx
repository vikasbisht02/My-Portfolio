import { TechstackList } from "../../utils/TechStackList.js";
import "./TechStack.css";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className="container techstack" id="tech">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Technologies Stack
      </h2>
      <hr />
      <p className="pb-3 text-center">
        👉 Including Programming Language, Frameworks, Databases, Front-End,
        and Back-End tools, and APIs
      </p>

      <div className="row">
        {TechstackList.map((tech) => (
          <motion.div
            key={tech._id}
            className="col-md-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
