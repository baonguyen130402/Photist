import axios from "axios";
import "./App.css";
import Router from "./components/Router";

const App = () => {
  axios.defaults.baseURL = "http://localhost:3001";
  return <Router />;
};

export default App;
