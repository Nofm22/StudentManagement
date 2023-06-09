import axiosClient from "../api/apiClient";

export const usersServices = {
  login: (params) => axiosClient.post(`users/login`, params),
  register: (params) => axiosClient.post(`users/register`, params),
};
