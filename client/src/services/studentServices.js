import axiosClient from "../api/apiClient";

export const classesServices = {
  getListClassesByGrades: (id) =>
    axiosClient.get(`classes/getListGradeClasses?name=${id}`),
  getClassCurSize: (name) =>
    axiosClient.get(`classes/getClassCurSize?name=${name}`),
  changeClass: (studentId, classId) =>
    axiosClient.put(
      `classes/changeClass?studentId=${studentId}&classId=${classId}`
    ),
  getClass: (id) => axiosClient.get(`classes/getClass?id=${id}`),
  getCourses: (id) => axiosClient.get(`courses/getCourses?id=${id}`),
  getClassNotFull: () => axiosClient.get(`classes/getNotFullClasses`),
  createClass: (params) => axiosClient.post(`classes/createClass`, params),
  updateClass: (params) => axiosClient.put(`classes/updateClass`, params),
  getClassNumberStudent: (name) =>
    axiosClient.get(`classes/getClassNumberStudent?name=${name}`),
};

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
