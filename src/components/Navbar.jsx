import { useState } from 'react'
import { logo } from '../assets'
import { Link } from "react-router-dom"
import { navLinks } from '../constants'
import { IoIosMenu as MenuIcon } from "react-icons/io"
import { IoMdClose as CloseIcon } from "react-icons/io"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

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
              className="w-20 h-20 object-contain bg-[#a68426] hover:scale-125" />
          </Link>
          <ul className='flex max-md:hidden flex-row gap-14 list-none'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-secondary hover:text-[#a68426] text-4xl font-medium cursor-pointer relative`} // Add 'relative' here
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`} className="relative inline-block">
                  {nav.title}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#a68426] transform scale-x-0 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <div onClick={() => setToggle(!toggle)} className='cursor-pointer mr-7'>
              {toggle ? <CloseIcon size={30}/> : <MenuIcon size={30} />}
            </div>
            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${active === nav.id ? "text-white" : "text-secondary"} font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(nav.id)
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
