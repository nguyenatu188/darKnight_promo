import { useState, useEffect } from 'react'
import { logo } from '../assets'
import { Link } from "react-router-dom"
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleIntersection = (entries) => {
      let isInNavSection = false
      entries.forEach((entry) => {
        if (entry.isIntersecting && navLinks.some((nav) => nav.id === entry.target.id)) {
          setActive(entry.target.id)
          isInNavSection = true
        }
      })

      if (!isInNavSection) {
        setActive('') // Reset active when in a non-navLinks section
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75, // Increase to require more of the section to be visible
      rootMargin: "0px 0px -50% 0px", // Adjusts the "visible" area to start earlier
    })    

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <>
      <nav className='w-full flex items-center fixed top-0 z-20 bg-neutral-900'>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center overflow-visible' // Allows overflow outside this element
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" 
            className="w-20 h-20 object-contain bg-[#a68426] transition-transform duration-100 hover:scale-125" />
        </Link>
        <ul className='flex flex-row gap-14 list-none'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? "text-[#a68426]" : "text-secondary"} hover:text-[#a68426] text-4xl font-medium cursor-pointer relative`} // Add 'relative' here
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`} className="relative inline-block">
                {nav.title}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#a68426] transform scale-x-0 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
