import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <a href="#Home" className="flex items-center font-bold text-2xl md:text-3xl">
                <Container className="mr-2 text-accent" />
                YO
                <span className="text-accent">DEV</span>
            </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-2">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost">
                        About
                    </a>
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-sm btn-ghost">
                        Technologies
                    </a>
                </li>
                <li>
                    <a href="#certifications" className="btn btn-sm btn-ghost">
                        Certifications
                    </a>
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-ghost">
                        Projects
                    </a>
                </li>
            </ul>

            {/* Mobile menu (hamburger) */}
            <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experiences">Technologies</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#Projects">Projects</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar