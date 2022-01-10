import React from 'react'

export const Todo = (props) => {
  const { title, userId } = props
  return <p>{`${title}(USER ID: ${userId})`}</p>
}
