import axios from "axios";
import { getAxios } from "./axiosCall";

export const getUserInfo = (userId) =>
    getAxios(`/user?userid=${userId}`);