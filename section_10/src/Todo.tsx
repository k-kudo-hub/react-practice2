import React from 'react'
import { TodoType } from "./types/todo";

export const Todo = (
  // "id" is not needed. So, use "Pick" to select other items from the TodoType. 
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[x]" : "[ ]";
  return <p>{`${completeMark} ${title}(USER ID: ${userId})`}</p>
}
