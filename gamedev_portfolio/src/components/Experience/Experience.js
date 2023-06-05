import React from "react";
import portfolioInfo from "../../data/portfolio.json";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {useTheme} from "next-themes";

const Experience = (props) => {
    const {resumeExperience} = portfolioInfo;
    const {theme} = useTheme();

    const work = resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.description;

        const mainTech = mainTechnologies.map((technology, i) => {
            return (
                <div className="main-badge mr-2 mb-2" key={i}>
                    {technology}
                </div>
            );
        });
        const tech = technologies.map((technology, i) => {
            return (
                <span
                    className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded experience-badge mr-2 mb-2
                    ${theme === "dark" ? "bg-columbiaBlue-200 text-cambridgeBlueDark-500" : "bg-tiffanyBlue-200 text-cambridgeBlue"}`}
                    key={i}>
                {technology}
              </span>
            );
        });
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.years}
                lineColor={theme === "dark" ? "#1e293b" : "#504136"}
                iconStyle={{
                    background: theme === "dark" ? "#baa898" : "#a49e8d",
                    color: "#fff",
                    textAlign: "center",
                }}
                textClassName={`${theme === "dark" && "text-white"}`}
                contentStyle={{background: theme === "dark" ? "#1e293b" : "#f6f5f4"}}
                icon={<i className={`${work.icon} experience-icon mt-1 text-2xl fullVertical:text-4xl fullVertical:mt-2.5`}></i>}
                key={i}
            >
                <h3 className={"text-2xl text-left mb-1"}>
                    {work.title}
                </h3>
                <h3 className="vertical-timeline-element-title text-left mb-1 font-bold"
                >
                    {work.company}
                </h3>
                <h4
                    className="vertical-timeline-element-subtitle"
                    style={{textAlign: "left"}}
                >
                    {mainTech}
                </h4>
                <div className={"flex flex-wrap mt-4"} style={{textAlign: "left"}}>{tech}</div>
            </VerticalTimelineElement>
        );
    });

    return (
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline
                    lineColor={theme === "dark" ? "#1e293b" : "#504136"}>
                    {work}
                    <VerticalTimelineElement
                        lineColor={"black"}
                        iconStyle={{
                            background: theme === "dark" ? "#baa898" : "#a49e8d",
                            color: "#fff",
                            textAlign: "center",
                            borderColor: theme === "dark" ? "#1e293b" : "#f6f5f4"
                        }}
                        className="vertical-timeline-element--work"
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon mt-1 text-2xl fullVertical:text-4xl fullVertical:mt-2.5"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}
export default Experience;
