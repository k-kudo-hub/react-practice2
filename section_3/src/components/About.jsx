import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const About = () => {
  const { links } = styles;
  const arr = [...Array(100).keys()];

  // v5
  // const history = useHistory();
  // const onClickContentA = () => history.push("/about/contentA");

  // v6
  const navigate = useNavigate();
  const onClickContentA = () => navigate("/about/contentA");

  return (
    <div>
      <h1>About is here!</h1>
      <div className={links}>
        {/* v5 => <Link to={{ to="contentA", state={arr} }}> */}
        <Link to="contentA" state={arr}>About Content A</Link>
        <Link to="contentB">About Content B</Link>
      </div>
      <div className={links}>
        <button onClick={onClickContentA}>DetailA</button>
      </div>
      <Outlet/>
    </div>
  )
}

export default About;
