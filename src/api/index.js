import { ApiRoutes } from "../constants";
export function ApiHelperPost(url, data = {}) {
  return fetch(ApiRoutes.API_HOSTNAME + url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        error = error;
      }
    );
}
export function ApiHelperFile(url, data = {}) {
  return fetch(ApiRoutes.API_HOSTNAME + url, {
    method: "POST",
    body: data

  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        error = error;
      }
    );
}
export function ApiHelperGet(url) {
  return fetch(ApiRoutes.API_HOSTNAME + url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        error = error;
      }
    );
}
