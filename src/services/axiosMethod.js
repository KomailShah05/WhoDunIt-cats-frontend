import axios from "./axiosInstance";

export async function getRequest(URL) {
  const response = await axios.get(`/${URL}`);
  return response;
}

export async function postRequest(URL, payload) {
  const response = await axios.post(`/${URL}`, payload);
  return response;
}

export async function putRequest(URL, payload) {
  const response = await axios.put(`/${URL}`, payload);
  return response;
}

export async function deleteRequest(URL) {
  const response = await axios.delete(`/${URL}`);
  return response;
}
