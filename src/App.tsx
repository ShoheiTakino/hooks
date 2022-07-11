import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";

const user = {
  id: 1,
  name: "shohi",
  email: "123@123",
  address: "address"
};

const onClickFetchUser = () => {
  axios.get("https://jsonplaceholder.typicode.com/users");
};

export default function App() {
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
