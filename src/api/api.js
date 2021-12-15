import axios from "axios";

const robots = axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.data);

export default robots;
