import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

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
    <div>
      <h1>Hello, Atomic Design.</h1>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>search</SecondaryButton>
      <SearchInput/>
      <UserCard user={user}/>
    </div>
  )
}

export default App;
