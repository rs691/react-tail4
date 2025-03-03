

export default function Navbar() {
    return (
        <nav className="navbar bg-dark text-primary-content">
        <div className="flex-1 btn-ghost ">
        <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
          <a className="btn btn-ghost normal-case text-xl" href="#about">About Me </a>
          <a className="btn btn-ghost normal-case text-xl" href="#projects">Projects</a>
          <a className="btn btn-ghost normal-case text-xl" href="#tutoring">Tutoring</a>
          <a className="btn btn-ghost normal-case text-xl" href="#contactMe">Contact Me</a>
        </div>
      </nav>
    )
}