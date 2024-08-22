import logo from "../assets/SaloniLogo.jpeg";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-0 w-24" src={logo} alt="logo" />
      </div>
      {/* Display the icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/saloni-sharma-b971b1208"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/salonis19/portfolio_project"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/saloniiiiiiiii.24?utm_source=qr&igsh=eDQ4eGRyYTE5YWUw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Saloni_chan?t=xTAdaKtY8kV5vepyIf5RPg&s=08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

