import React, { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
}

// Optional Chain
// ex. user = { name: "JS" }
// user.hobbies.join(" / "); => TypeError !
// user.hobbies?.join(" / "); => undefined
//
// 1. Before access "hobbies[x]", check about hobbies not equal "null" or "undefined".
// 2. (If "null" or "undefined") Return "undefined".
// 3. (If not "null" or "undefined") Return value.

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>Name</dt>
      <dd>{user.name}</dd>
      <dt>Hobby</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  )
}
