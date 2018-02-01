import { actions } from "mirrorx";
import axios from "axios";
import * as api from "./server.jsx";
export default {
  name: "fsztest",
  initialState: {
    list: [],
    user: {
      name: "房帅中",
      age: 23,
      sex: 0
    }
  },
  reducers: {
    save(state, data) {
      return { ...state, ...data };
    }
  },
  effects: {
    getList() {
      actions.fsztest.save({ user: { name: "房宏炎", age: 24, sex: 0 } });
    },
    async getUserList() {
      let { data: { data: list } } = await api.getUser();
      actions.fsztest.save({ list });
      console.log("获取线上数据");
      console.log(list);
    }
  }
};
