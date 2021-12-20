import "./styles.css";
import Logo from "./components/wishaLogo";
import Home from "./components/HomePage";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavScreen from "./components/NavScreen";
export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Logo} />
          <Route path="/home" component={Home} />
          <Route path="/nav" component={NavScreen} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}
