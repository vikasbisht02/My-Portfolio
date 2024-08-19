import "./WorkExp.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className=" work" id="work">
        <div className="container work-exp">
          <h2 className=" col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c" className="verticalTimeLine">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Fresher</h3>
              <h4 className="vertical-timeline-element-subtitle">
                I am a fresher currently working on  good projects to get a good
                job.
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
