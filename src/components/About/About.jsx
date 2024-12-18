import { skills } from '../../constants';

const About = () => {
  return (
    <section name="about" className="w-full min-h-screen bg-primary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-purple-500">About</h2>
        </div>

        <p className="text-xl mt-10">
          I'm a passionate developer specializing in crafting dynamic web applications. 
          With a strong foundation in both frontend and backend technologies, I enjoy turning complex problems into elegant solutions.
        </p>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 bg-tertiary rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">{category}</h4>
                <ul className="space-y-2">
                  {items.map((skill, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="mr-2">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;