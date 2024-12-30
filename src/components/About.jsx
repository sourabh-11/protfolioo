import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";

const About = () => {
  // State to manage animation trigger
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when the component is mounted
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl font-bold text-[#3A3960]">About Me</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
            Hi! I&apos;m Sourabh, a passionate software developer with expertise in creating user-friendly applications and managing robust back-end infrastructures. 
            I am dedicated to writing clean, maintainable code and building scalable solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-center text-[#3A3960]">Skills</h2>

          {/* Skill 1: HTML5 */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaHtml5 className="text-4xl text-orange-500" />
                <p className="text-lg text-gray-700">HTML5</p>
              </div>
              <p className="text-lg text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-orange-500' : 'bg-gray-300'}`}
                style={{ width: animate ? '70%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 2: CSS3 */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaCss3Alt className="text-4xl text-blue-500" />
                <p className="text-lg text-gray-700">CSS3</p>
              </div>
              <p className="text-lg text-gray-700">80%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-blue-500' : 'bg-gray-300'}`}
                style={{ width: animate ? '80%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 3: JavaScript (ES6) */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaCode className="text-4xl text-yellow-500" />
                <p className="text-lg text-gray-700">ES6 JavaScript</p>
              </div>
              <p className="text-lg text-gray-700">75%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-yellow-500' : 'bg-gray-300'}`}
                style={{ width: animate ? '75%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 4: React */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaReact className="text-4xl text-blue-400" />
                <p className="text-lg text-gray-700">React JS</p>
              </div>
              <p className="text-lg text-gray-700">85%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-blue-400' : 'bg-gray-300'}`}
                style={{ width: animate ? '85%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 5: Tailwind CSS */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-4xl text-[#3E7B27]">TW</div>
                <p className="text-lg text-gray-700">Tailwind CSS</p>
              </div>
              <p className="text-lg text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-[#3E7B27]' : 'bg-gray-300'}`}
                style={{ width: animate ? '70%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 6: Express */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaNodeJs className="text-4xl text-green-500" />
                <p className="text-lg text-gray-700">Express</p>
              </div>
              <p className="text-lg text-gray-700">70%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-green-500' : 'bg-gray-300'}`}
                style={{ width: animate ? '70%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 7: Node.js */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaNodeJs className="text-4xl text-green-500" />
                <p className="text-lg text-gray-700">Node JS</p>
              </div>
              <p className="text-lg text-gray-700">80%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-green-500' : 'bg-gray-300'}`}
                style={{ width: animate ? '80%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 8: PostgreSQL */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaDatabase className="text-4xl text-indigo-600" />
                <p className="text-lg text-gray-700">PostgreSQL</p>
              </div>
              <p className="text-lg text-gray-700">60%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-indigo-600' : 'bg-gray-300'}`}
                style={{ width: animate ? '60%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 9: SQL */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaDatabase className="text-4xl text-indigo-600" />
                <p className="text-lg text-gray-700">SQL</p>
              </div>
              <p className="text-lg text-gray-700">75%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-indigo-600' : 'bg-gray-300'}`}
                style={{ width: animate ? '75%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Skill 10: OOPs */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaCode className="text-4xl text-purple-500" />
                <p className="text-lg text-gray-700">OOPs</p>
              </div>
              <p className="text-lg text-gray-700">80%</p>
            </div>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${animate ? 'bg-purple-500' : 'bg-gray-300'}`}
                style={{ width: animate ? '80%' : '0%' }}
              ></div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default About;
