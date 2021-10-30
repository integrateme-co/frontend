import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CrossPost from "./components/CrossPost";
import Footer from "./components/Footer";
import LP1 from "./Layouts/Layout1/Layout1";
import Profile from "./components/Profile";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/pe-icon-7.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LP1} />
        <>
          <NavBar />
          <div className="Main">
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
            <Route
              path="/login"
              component={() => {
                window.location.href =
                  "https://api.integrateme.co/accounts/login/";
                return null;
              }}
            />
            <Route path="/profile" component={Profile} />
          </div>
        </>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
