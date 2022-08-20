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

export const getUser = (accessToken) => {
  return fetch(baseUrl + '/users/me', {
    headers: {
      'X-Authorization': accessToken
    },
    "Content-Type": "application/json"
  })
};

export const logout = (accessToken) => {
  return fetch(baseUrl + '/users/logout', {
    headers: {
      'X-Authorization': accessToken
    },
    "Content-Type": "application/json"
  })
};
