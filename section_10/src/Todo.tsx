import React, { VFC } from 'react'
import { TodoType } from "./types/todo";

// "id" is not needed. So, use "Pick" to select other items from the TodoType. 
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[x]" : "[ ]";
  return <p>{`${completeMark} ${title}(USER ID: ${userId})`}</p>
}
