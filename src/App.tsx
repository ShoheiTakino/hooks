import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "shohi",
  email: "123@123",
  address: "address"
};

export default function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        const data = result.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <UserCard user={user} />
    </div>
  );
}
