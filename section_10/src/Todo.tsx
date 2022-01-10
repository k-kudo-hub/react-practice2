import React from 'react'

type TodoType = {
  title: string;
  userId: number;
  completed?: boolean;
}

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[x]" : "[ ]";
  return <p>{`${completeMark} ${title}(USER ID: ${userId})`}</p>
}
