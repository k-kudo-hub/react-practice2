import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const AboutContent_1 = () => {
  const { links } = styles;
  const location = useLocation();
  console.log(location);

  // v5
  // const history = useHistory();
  // const onClickBack = () => history.goBack();

  // v6
  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);

  return (
    <div>
      <h2>About Content A</h2>
      <p>Lorem...Lorem...Lorem...Lorem...Lorem...</p>
      <div className={links}>
        <button onClick={onClickBack}>Back</button>
      </div>
    </div>
  )
}

export default AboutContent_1;
