import axios from "axios";

export const App = () => {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <h1>Hello, JSONPlaceholder</h1>
      <button onClick={onClickUsers}>Get users</button>
      <button onClick={onClickUser1}>Get user1</button>
    </div>
  )
}
