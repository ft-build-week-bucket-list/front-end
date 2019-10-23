import axios from "axios";

export default function axiosWithAuth() {
 return axios.create({
   baseURL: "https://bw-bucketlist.herokuapp.com/api",
   headers: {
     Authorization: localStorage.getItem("token")
   }
 });
}