import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="-my-5 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center px-10 ">
           {/* <img className="" src={logo} alt="logo/" /> */}
        <h1 className="mx-2 text-2xl">Gb</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/gautam-bharti-98b44026?utm_source=share&utm_campaign=share_via&utm_content=profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/gautam.bharti.19?igsh=anJ5YTFrdng4d3l1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
