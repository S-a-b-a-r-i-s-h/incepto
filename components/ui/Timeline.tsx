"use client"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWidthFull } from 'react-icons/md'
import { TimeLineElements } from "@/constants";
import 'react-vertical-timeline-component/style.min.css'
import { useInView } from 'react-intersection-observer';
import './timeline.css'

const Timeline = () => {
  return (
    <div className="mb-32">
      <h1 className="opacity-1 text-white text-5xl font-semibold w-full flex justify-center mb-20">Timeline</h1>
      <VerticalTimeline 
        lineColor="#fff" 
      >
        {TimeLineElements.map((element: any) => {
          return (
            <VerticalTimelineElement
              contentStyle={{ background: "#101010" }}
              contentArrowStyle={{ borderRight: "7px solid #BFDBFE" }}
              iconStyle={{ background: "#BFDBFE" }}
              visible={true} 
              date={element.date}
              dateClassName="text-[#06B6D4]"
              icon={<element.icon />}
              // ref={ref}
            >
              <h2 className="gradient2 inline-block">{element.title}</h2>
              <p className="text-white">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
