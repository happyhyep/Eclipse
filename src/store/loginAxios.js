import { postAxios } from "./axiosCall";

export const login = (userid, password) =>
  postAxios(`/login/${userid}/${password}`);
