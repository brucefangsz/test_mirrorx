import axios from "axios";
import request from "./ajax";
const URL = {
  GET_USER: "/api/user"
};

export function getUser() {
  return request(URL.GET_USER, {
    method: "get"
  });
}
