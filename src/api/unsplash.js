import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID nvt2Z63LeUuMJmOfO2HOmhXb1xBn1dv-Xy8TE0Joji4",
  },
});
