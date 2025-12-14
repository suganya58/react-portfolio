import { FaLinkedin, FaGithub } from "react-icons/fa"
import avatar from "../assets/avatar.jpg"

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Section (TOP on mobile, RIGHT on desktop) */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={avatar}
            alt="Suganya Profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Hello! My name is Suganya S
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a passionate Computer Science student and programmer who enjoys
            building responsive web applications and solving real-world problems
            using modern technologies.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/suganya-subramaniyan-67260729b/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-blue-600 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/suganya58"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-800 hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contact Me
            </a>

            <a
              href="/suganyaresume.pdf"
              download
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
