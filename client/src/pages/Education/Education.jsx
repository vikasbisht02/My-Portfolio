import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";



const Education = () => {
  return (
    <>
      <div className="education" id="educaton">
        <h2 className=" col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2021 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Bechalre Of Computer Application(BCA)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shri Guru Ram Rai University, Dehradun
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2020 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Government Inter College, Uttarakhand
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
