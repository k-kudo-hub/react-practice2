import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const About = () => {
  const { links } = styles;
  return (
    <div>
      <h1>About is here!</h1>
      <div className={links}>
        <Link to="contentA">About Content A</Link>
        <Link to="contentB">About Content B</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default About;
