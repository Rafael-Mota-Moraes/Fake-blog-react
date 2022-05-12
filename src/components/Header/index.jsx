import "./styles.css";
import { BsGlobe } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";

export function Header() {
  return (
    <header>
      <BsGlobe className="icon" />
      <div className="blog-title-box">
        <FaBlogger className="icon" />
        <h1 className="header-title">Blog</h1>
      </div>
    </header>
  );
}
