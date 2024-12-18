import ProjectCard from './ProjectCard';
import { projects } from '../../constants';

const Projects = () => {
  return (
    <section name="projects" className="w-full min-h-screen bg-primary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-purple-500">Projects</h2>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;