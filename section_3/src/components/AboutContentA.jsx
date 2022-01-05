import { useLocation } from "react-router-dom";

const AboutContent_1 = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>About Content A</h2>
      <p>Lorem...Lorem...Lorem...Lorem...Lorem...</p>
    </div>
  )
}

export default AboutContent_1;
