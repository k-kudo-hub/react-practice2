import React from "react";

export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }
  const onClickPractice = () => console.log(getTotalFee(1000));
  return (
    <div>
      <p>Practice - Specify the type of value to be returned -</p>
      <button onClick={onClickPractice}>Run practice 2</button>
    </div>
  )
}
