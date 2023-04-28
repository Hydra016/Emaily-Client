import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="custom-container">
        <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
