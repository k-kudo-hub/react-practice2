import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";

const App = () => {
  return (
    <div>
      <h1>Hello, Atomic Design.</h1>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>search</SecondaryButton>
      <SearchInput/>
    </div>
  )
}

export default App;
