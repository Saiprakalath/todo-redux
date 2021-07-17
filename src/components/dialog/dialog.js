import React from "react";

const Dialog = ({ onClosed, handleChange, onSave, data }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card dialog">
        <div className="container">
          <div>
            <strong>📝 Create Task</strong>
            <div className="col-12 col-md-5 col-xs-8 ">
              <div className="d-flex justify-content-center flex-column">
                <input
                  type="text"
                  name="task"
                  value={data?.task ?? ""}
                  placeholder="Please enter the task"
                  className="dialogText"
                  onChange={handleChange}
                />
                <select
                  value={data?.priority ?? ""}
                  aria-label="Default select example"
                  className="form-select dialogText"
                  name="priority"
                  onChange={handleChange}
                >
                  <option value="">Open this select priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div className="divConfirm">
              <button
                className="okbutton"
                disabled={data.task === "" || data.priority === ""}
                onClick={onSave}
              >
                Save
              </button>
              <button className="closebutton" onClick={onClosed}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
