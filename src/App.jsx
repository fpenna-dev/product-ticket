import "./App.css";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Main from "./components/Main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App-header">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/main" component={Main}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
