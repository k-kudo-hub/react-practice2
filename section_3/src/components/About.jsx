import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const About = () => {
  const { links } = styles;
  const arr = [...Array(100).keys()];

  return (
    <div>
      <h1>About is here!</h1>
      <div className={links}>
        {/* v5 => <Link to={{ to="contentA", state={arr} }}> */}
        <Link to={"contentA"} state={arr}>About Content A</Link>
        <Link to="contentB">About Content B</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default About;
