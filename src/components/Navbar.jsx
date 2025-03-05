

export default function Navbar() {
    return (
      <nav className="navbar bg-black text-primary-content flex justify-between items-center p-4">
      {/* Home Icon */}
      <a className="btn btn-ghost flex items-center text-xl" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </a>
      
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <a className="btn btn-accent btn-outline text-accent-100 normal-case text-xl" href="#about">About Me</a>
        <a className="btn btn-accent btn-outline text-accent-100 normal-case text-xl" href="#projects">Projects</a>
        <a className="btn btn-ghost normal-case text-xl" href="#tutoring">Tutoring</a>
        <a className="btn btn-ghost normal-case text-xl" href="#contact">Contact</a>
        <button aria-label="Toggle Dark Mode" type="button" className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="dark:text-white">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>
      </div>
    </nav>
    )
}