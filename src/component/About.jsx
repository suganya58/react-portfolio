import aboutImg1 from "../assets/cursor.webp"
import aboutImg2 from "../assets/features-ai.png"
import { FaCheckCircle } from "react-icons/fa"

function About() {
  const aboutData = [
    {
      id: 1,
      title: "Who I Am",
      image: aboutImg1,
      description:
        "I am a Computer Science student who enjoys building responsive web applications and solving problems using modern technologies.",
      items: [
        "Computer Science Student",
        "Problem Solver",
        "Web Developer",
        "Team Player",
      ],
    },
    {
      id: 2,
      title: "What I Do",
      image: aboutImg2,
      description:
        "I focus on front-end development and continuously improve my skills through projects and coding practice.",
      items: [
        "React Development",
        "Tailwind CSS",
        "JavaScript",
        "Git & GitHub",
      ],
    },
  ]

  return (
    <section id="about" className="py-16 bg-white-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutData.map((card) => (
            <div
              key={card.id}
              className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition p-6"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {card.description}
              </p>

              {/* List */}
                  <ul className="space-y-2">
                      {card.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                              <FaCheckCircle className="text-blue-600" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
