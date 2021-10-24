import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CrossPost from "./components/CrossPost";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/crosspost" component={CrossPost} />
          <Route
            path="/github"
            component={() => {
              window.location.href =
                "https://github.com/integrateme-co/integrate-io";
              return null;
            }}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
