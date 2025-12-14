import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Project", link: "#project" },
    { name: "Skill", link: "#skill" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          SUGANYA
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-600 font-medium hover:text-black transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 text-lg font-medium hover:text-black"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
