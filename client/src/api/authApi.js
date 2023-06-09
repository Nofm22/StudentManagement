import axiosClient from "./apiClient";

const authApi = {
  login: (params) => axiosClient.post("users/login", params),
  register: (params) => axiosClient.post("users/register", params),
  verify: () => axiosClient.get("users/verify-token"),
};

export default authApi;
