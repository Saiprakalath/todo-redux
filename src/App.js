import { Switch, Route, Redirect } from "react-router-dom";
import LoginLayout from "./layouts/loginLayout/loginLayout";
import TaskLayout from "./layouts/taskLayout/taskLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  const islogIn = () => {
    return localStorage.getItem("loggedIn");
  };

  return (
    <>
      <React.Fragment>
        <div className="App">
          <ToastContainer autoClose={3000} />
          <Switch>
            <Route path="/login" component={LoginLayout}></Route>
            {islogIn() ? (
              <Route path="/task" component={TaskLayout} />
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </div>
      </React.Fragment>
    </>
  );
}

export default App;
