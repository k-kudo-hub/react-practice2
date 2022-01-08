import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";

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
    <BrowserRouter>
      <DefaultLayout>
        <h1>Hello, Atomic Design.</h1>
        <PrimaryButton>test</PrimaryButton>
        <SecondaryButton>search</SecondaryButton>
        <SearchInput/>
        <UserCard user={user}/>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App;
