import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import project1 from "../assets/OIP.webp"
import project2 from "../assets/th.webp"
import project3 from "../assets/wp2742456.webp"

function Project() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      image: project1,
      description:
        "A personal portfolio website built using React and Tailwind CSS to showcase my skills and projects.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://your-live-link.com",
      sourceLink: "https://github.com/suganya58/react-portfolio",
    },
    {
      id: 2,
      title: "Task Management App",
      image: project2,
      description:
        "A task management application that allows users to add, edit, and delete tasks with a clean UI.",
      technologies: ["React", "CSS", "Local Storage"],
      liveLink: "https://your-live-link.com",
      sourceLink: "https://github.com/suganya58/task-manager",
    },
    {
      id: 3,
      title: "College Event Registration",
      image: project3,
      description:
        "A responsive platform for managing college event registrations with user-friendly forms.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://your-live-link.com",
      sourceLink: "https://github.com/suganya58/event-registration",
    },
  ]

  return (
    <section id="project" className="py-16 bg-white-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-100 text-purple-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:underline"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
