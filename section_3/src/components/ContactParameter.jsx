import { useParams, useLocation } from "react-router-dom";

export const ContactParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>URL Parameter</h1>
      <p>Parameter is {id}</p>
      <p>Query parameter is {query.get("name")}</p>
    </div>
  );
};
