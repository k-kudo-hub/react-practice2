import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const { links } = styles;
  return (
    <div>
      <h1>Home is here!</h1>
      <div className={links}>
        <Link to="/about">About Page</Link>
        <Link to="/contact">Contact Page</Link>
      </div>
    </div>
  )
}

export default Home;
