import axios from "axios";

export function getTask() {
  return axios.get("https://60cf6dde4a030f0017f67b33.mockapi.io/api/task/todo");
}

export function createTask(data) {
  return axios.post(
    "https://60cf6dde4a030f0017f67b33.mockapi.io/api/task/todo",
    data
  );
}

export function updateTask(id, data) {
  return axios.put(
    `https://60cf6dde4a030f0017f67b33.mockapi.io/api/task//todo/${id}`,
    data
  );
}

export function deleteTask(id) {
  return axios.delete(
    `https://60cf6dde4a030f0017f67b33.mockapi.io/api/task//todo/${id}`
  );
}
