import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CrossPost from "./components/CrossPost";
import Footer from "./components/Footer";
import LandingPage from "./Layouts/Layout";
import Profile from "./components/Profile";

// Import Scss
// import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/pe-icon-7.css";
import Notion from "./components/Notion/Notion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <>
          <NavBar />
          <div className="Main">
            <Route path="/crosspost" component={CrossPost} />
            <Route path="/notion" component={Notion} />
            <Route
              path="/buy-me-a-coffee"
              component={() => {
                window.location.href =
                  "https://www.buymeacoffee.com/integrateme";
                return null;
              }}
            />
            <Route
              path="/github"
              component={() => {
                window.location.href =
                  "https://github.com/integrateme-co/integrate-io";
                return null;
              }}
            />
            <Route
              path="/github-issues"
              component={() => {
                window.location.href =
                  "https://github.com/integrateme-co/integrate-io/issues";
                return null;
              }}
            />
            <Route
              path="/login"
              component={() => {
                window.location.href =
                  "https://api.integrateme.co/accounts/google/login/?process=login";
                return null;
              }}
            />
            <Route
              path="/logout"
              component={() => {
                window.location.href =
                  "https://api.integrateme.co/accounts/logout";
                return null;
              }}
            />
            <Route
              path="/notion-auth"
              component={() => {
                window.location.href =
                  "https://api.notion.com/v1/oauth/authorize?owner=user&client_id=72774125-6b4b-4e58-9da6-fed94dc50b6a&response_type=code";
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
