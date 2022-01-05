import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const Contact = () => {
  const { links } = styles;
  return (
    <div>
      <h1>Contact is here!</h1>
      <nav className={links}>
        <Link to="/contact/1">URL Parameter</Link>
        <Link to="/contact/1?name=hoge">Query Parameter</Link>
      </nav>
    </div>
  )
}

export default Contact;
