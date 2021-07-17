import React from "react";
import Login from "../../components/login/login";
import { Route, Switch } from "react-router-dom";

const LoginLayout = () => {
  React.useEffect(() => {
    document.title = "TODO | Login";
  }, []);

  return (
    <div className="login-layout">
      <div className="container">
        <div className="row">
            <strong>Todo Application</strong>
          <div className="col-12 col-xs-8">     
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
