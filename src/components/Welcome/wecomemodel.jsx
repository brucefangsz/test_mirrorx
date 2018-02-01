import { actions } from "mirrorx";
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
  effects: {}
};
