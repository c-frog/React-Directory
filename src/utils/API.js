import axios from "axios";
const apiUrl = "https://randomuser.me/api/?results=200&nat=us";

export default {
   search: function() {
      return axios.get(apiUrl);
   }
};