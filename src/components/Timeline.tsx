import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faRobot } 
from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>My Journey</h1>

        <VerticalTimeline>

          {/* Startup & Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – Present"
            contentStyle={{ background: "#ffffff", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Startup Founder & Tech Builder</h3>
            <h4 className="vertical-timeline-element-subtitle">Addis Ababa, Ethiopia</h4>
            <p>
              Founder of early-stage tech initiatives including <strong>Husler</strong> and <strong>Tenets</strong>.
              Working on web applications, UI/UX design, user research, and product strategy.
            </p>
          </VerticalTimelineElement>

          {/* UN / Fellowship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Millennium Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">United Nations–Backed Program</h4>
            <p>
              Selected Millennium Fellow working on social-impact projects focused on innovation,
              sustainability, and youth leadership.
            </p>
          </VerticalTimelineElement>

          {/* Drone & GIS */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faRobot} />}
          >
            <h3 className="vertical-timeline-element-title">Drone & Geospatial Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Academic & Research Projects</h4>
            <p>
              Drone mapping, orthomosaic generation, DSM/DTM analysis using QGIS and ArcGIS.
              Flood risk assessment for refugee camps and environmental research.
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 – Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              BSc in Biomedical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Addis Ababa Institute of Technology (AAiT)
            </h4>
            <p>
              Specializing in biomaterials, biomechanics, biosignal processing,
              sustainable engineering, and medical device innovation.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
