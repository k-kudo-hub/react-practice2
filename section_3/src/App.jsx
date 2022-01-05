import "./App.css";
import { Link, BrowserRouter } from "react-router-dom";
import { Router } from "./route/Router";
import styles from './styles/Home.module.scss';

const App = () => {
  const { links } = styles;
  return (
    <BrowserRouter>
      <Router />
      <div className={links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </BrowserRouter>
  )
}

export default App;
