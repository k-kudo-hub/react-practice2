import React from 'react';
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App (){
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div>
      <h1>Hello, custom hook.</h1>
      <button onClick={onClickFetchUser}>Get data</button>
      {error ? (
        <p style={{ color: "red" }}>Data loading error.</p>
      ) : loading ? (
        <p>Now loading...</p>
      ) : (
        userProfiles.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))
      )}
    </div>
  )
}
