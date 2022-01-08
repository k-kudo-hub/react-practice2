import { Router } from "./Route/Router";
import { UserProvider } from "./providers/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App;
