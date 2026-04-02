import axiosInstance from "./axiosInstance";
const api = {
  get: (url, config) => axiosInstance.get(url, config).then((res) => res.data),

  post: (url, body, config) =>
    axiosInstance.post(url, body, config).then((res) => res),

  put: (url, body, config) =>
    axiosInstance.put(url, body, config).then((res) => res.data),

  patch: (url, body, config) =>
    axiosInstance.patch(url, body, config).then((res) => res.data),

  delete: (url, config) =>
    axiosInstance.delete(url, config).then((res) => res.data),
};

export default api;
