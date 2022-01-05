import { useParams } from "react-router-dom";

export const ContactParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>URL Parameter</h1>
      <p>Parameter is {id}</p>
    </div>
  );
};
