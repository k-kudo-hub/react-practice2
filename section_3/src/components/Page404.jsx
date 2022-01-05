import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const Page404 = () => {
  const { links } = styles;
  return (
    <div>
      <h1>[404] Page not found...</h1>
      <div className={links}>
        <Link to="/">TOP PAGE</Link>
      </div>
    </div>
  )
}

export default Page404;
