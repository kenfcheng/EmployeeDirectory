import axios from "axios";

export default {
  fetchEmployees: function () {
    return axios.get("https://randomuser.me/api/").then((res) => {
      const employees = res.data;
      return {
        Name: name.first,
        Email: Email,
        Username: Username,
      };
    });
  },
};
