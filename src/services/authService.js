const baseUrl = "http://localhost:3030";

export const login = (payload) => {
  return fetch(baseUrl + "/users/login", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(payload),
  });
};

export const registerHandler = (payload) => {
  return fetch(baseUrl + "/users/register", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(payload),
  });
};

export const logout = () => {};
