import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "shohi",
  email: "123@123",
  address: "address"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
