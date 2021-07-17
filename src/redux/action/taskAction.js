import * as actionTypes from "../actionType";
import * as api from "../../Api/taskApi";

export function getTaskSuccesss(data){
    return {type:actionTypes.GET_TASK, data}
}

export function updateTaskSuccesss(data){
    return {type:actionTypes.UPDATE_TASK, data}
}

export function createTaskSuccesss(data){
    return {type:actionTypes.CREATE_TASK, data}
}

export function getTask() {
    return function (dispatch) {
      return api
        .getTask()
        .then((data) => {
          dispatch(getTaskSuccesss(data));
          return data;
        })
        .catch((error) => {
          throw error;
        });
    };
  }

  export function updateTask(id,data) {
    return function (dispatch) {
      return api
        .updateTask(id,data)
        .then((data) => {
          dispatch(updateTaskSuccesss(data));
          return data;
        })
        .catch((error) => {
          throw error;
        });
    };
  }

  export function createTask(data) {
    return function (dispatch) {
      return api
        .createTask(data)
        .then((data) => {
          dispatch(createTaskSuccesss(data));
          return data;
        })
        .catch((error) => {
          throw error;
        });
    };
  }