import { Router } from "./Route/Router";

const user = {
  name: "Bond",
  image: "https://source.unsplash.com/mJaD10XeD7w",
  email: "aaa@example.com",
  phone: "XXX-XXXX-XXXX",
  company: {
    name: "Test.inc"
  },
  web: "http://localhost.com"
}

const App = () => {
  return (
    <Router />
  )
}

export default App;
