import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paymentpage from "./components/Paymentpage";
import ThankYouPage from "./components/ThankYouPage";
import Home from "./includes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pay" exact component={Paymentpage} />
        <Route path="/10q" exact component={ThankYouPage} />
      </Switch>
    </Router>
  );
}

export default App;
