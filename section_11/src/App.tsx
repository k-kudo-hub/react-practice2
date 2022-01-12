import React, { useState } from 'react';
import axios from 'axios';
import { UserCard } from "./components/UserCard";
import { User } from './types/api/user';
import { UserProfile } from './types/UserProfile';

export default function App (){
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <h1>Hello, custom hook.</h1>
      <button onClick={onClickFetchUser}>Get data</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  )
}
