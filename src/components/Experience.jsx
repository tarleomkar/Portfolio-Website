import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "Led development of multiple full-stack applications using React and Node.js",
    date: "2020 - Present",
  },
  {
    title: "Software Developer",
    company: "StartUp Inc",
    location: "New York, NY",
    description: "Developed and maintained client-facing applications using modern JavaScript frameworks",
    date: "2018 - 2020",
  },
  {
    title: "Junior Developer",
    company: "Dev Agency",
    location: "Boston, MA",
    description: "Collaborated with senior developers to build responsive web applications",
    date: "2016 - 2018",
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Work Experience
      </h2>

      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
            date={experience.date}
            iconStyle={{ background: '#915EFF' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-secondary mt-2">
              {experience.company} - {experience.location}
            </h4>
            <p className="text-secondary mt-4">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;