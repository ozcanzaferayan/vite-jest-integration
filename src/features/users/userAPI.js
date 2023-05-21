import axios from "axios";

export const userAPI = {
  fetchUser: () => {
    return axios.get("/users/1");
  },
};
