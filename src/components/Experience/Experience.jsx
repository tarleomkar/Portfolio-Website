import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section name="experience" className="w-full min-h-screen bg-primary">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-purple-500 text-white">
            Experience
          </h2>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
            date="May 2023 - June 2024"
            iconStyle={{ background: '#915EFF' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Frontend Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-purple-400 mt-2">
              Shoppeal Tech - Internship, Kalyan, Maharashtra
            </h4>
            <ul className="text-gray-300 mt-4 list-disc list-inside space-y-2">
              <li>Developed real-time applications and interactive interfaces as a key member of the front-end team</li>
              <li>Built and implemented complex features using HTML, CSS, JavaScript, React.js and APIs to ensure a smooth UX</li>
              <li>Completed projects like a dynamic real-time app, feature-rich to-do list, and an accurate UI design clone</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;