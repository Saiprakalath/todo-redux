import React from "react";
import DialogBox from "../dialog/dialog";
import { deleteTask } from "../../Api/taskApi";
import { getTask, updateTask, createTask } from "../../redux/action/taskAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Task = () => {
  const dispatch = useDispatch();
  const [tempData, setTempData] = React.useState({ task: "", priority: "" });
  const [open, setOpen] = React.useState(false);
  const taskConfig = useSelector((state) => state?.task);

  React.useEffect(() => {
    const taskConfig = async () => {
      try {
        await getTask()(dispatch);
      } catch (err) {
        toast.error(err);
      }
    };

    taskConfig();
  }, [dispatch]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClosed = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    let cloneData = { ...tempData };
    try {
      await createTask(cloneData)(dispatch);
      await getTask()(dispatch);
      toast.success("successfully created");
      setOpen(false);
      setTempData({ task: "", priority: "" });
    } catch (err) {
      toast.error(err);
    }
  };

  const handleDialogBox = () => {
    return (
      <DialogBox
        onClosed={handleClosed}
        handleChange={onChange}
        onSave={handleSave}
        data={tempData}
      />
    );
  };

  const getStstus = (data) => {
    switch (data) {
      case true:
        return "✅";
      case false:
        return "✔";
      default:
        return "✔️";
    }
  };

  const getPriority = (priority) => {
    switch (priority) {
      case "low":
        return (
          <button type="button" className="low__button">
            <span className="badge">Low</span>
          </button>
        );
      case "medium":
        return (
          <button type="button" className="medium__button">
            <span className="badge">Medium</span>
          </button>
        );
      case "high":
        return (
          <button type="button" className="high__button">
            <span className="badge">High</span>
          </button>
        );
      default:
        return "no priority found";
    }
  };

  const handleUpdate = async (e, index) => {
    try {
      const cloneData = JSON.parse(JSON.stringify(taskConfig));
      if (!!cloneData[index]?.status) {
        return toast.error("task already completed");
      }
      cloneData[index] = {
        ...cloneData[index],
        status: !cloneData[index]?.status,
      };
      await updateTask(cloneData[index].id, cloneData[index])(dispatch);
      await getTask()(dispatch);
      toast.success("successfully updated");
    } catch (ex) {
      toast.error(ex);
    }
  };

  const handleDelete = async (e, index) => {
    try {
      const cloneData = JSON.parse(JSON.stringify(taskConfig));
      await deleteTask(cloneData[index].id);
      await getTask()(dispatch);
      toast.success("successfully deleted");
    } catch (ex) {
      toast.error(ex);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <strong> Marketing Compagin</strong>
          </div>
        </div>
        {!open && (
          <div className="task-border row">
            <div className="col">
              <button
                className="_button task-border_task_col"
                onClick={handleClick}
              >
                Add task
              </button>
            </div>
          </div>
        )}
        <div className="row pt-2">
          {!open && (
            <div className="task-box card overflow-auto">
              <div className="card-body">
                <div className="row ">
                  <div className="col-2">
                    <strong>Status</strong>
                  </div>
                  <div className="col-5">
                    <strong>Task</strong>
                  </div>
                  <div className="col-3">
                    <strong>Priority</strong>
                  </div>
                  <div className="col-2">
                    <strong>Action</strong>
                  </div>
                </div>
                {!!taskConfig?.length &&
                  JSON.parse(JSON.stringify(taskConfig)).map((s, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="col-2 p-3">
                          <button
                            onClick={(e) => {
                              handleUpdate(e, index);
                            }}
                          >
                            {getStstus(s.status)}
                          </button>
                        </div>
                        <div className="col-5 p-3">{s.task}</div>
                        <div className="col-3 p-3">
                          {getPriority(s.priority)}
                        </div>
                        <div className="col-2 p-3">
                        <button  onClick={(e) => {
                              handleDelete(e, index);
                            }}>
                        🗑️
                        </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
      {!!open && handleDialogBox()}
    </>
  );
};

export default Task;
