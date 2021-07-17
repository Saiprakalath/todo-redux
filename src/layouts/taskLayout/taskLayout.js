import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/header/header";
import Task from "../../components/task/task";

import { useHistory } from "react-router-dom";

const TaskLayout = () => {
  React.useEffect(() => {
    document.title = "TODO | Task";
  }, []);

  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <Header handleClick={handleClick}/>
      <div className="task-layout">
        <div>
          <Switch>
            <Route path="/task" component={Task} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default TaskLayout;
