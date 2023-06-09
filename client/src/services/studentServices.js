import axiosClient from "../api/apiClient";

export const coursesServices = {
  createCourse: (params) => axiosClient.post(`courses/createCourse`, params),
  getCoursesByGrade: (id) =>
    axiosClient.get(`courses/getCoursesByGrade?gradeId=${id}`),
  getCoursesSummary: (courseName, semesterOne, semesterTwo) =>
    axiosClient.get(
      `courses/getCoursesSummary?courseName=${courseName}&semesterOne=${semesterOne}&semesterTwo=${semesterTwo}`
    ),
  getSemesterSummary: (semesterOne, semesterTwo) =>
    axiosClient.get(
      `scores/getSemesterSummary?semesterOne=${semesterOne}&semesterTwo=${semesterTwo}`
    ),
  updateCourse: (params) => axiosClient.put(`courses/updateCourse`, params),
};

export const usersServices = {
  login: (params) => axiosClient.post(`users/login`, params),
  register: (params) => axiosClient.post(`users/register`, params),
};
