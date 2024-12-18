const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="bg-tertiary rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 h-20">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;