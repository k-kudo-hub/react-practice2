import React from "react";

export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>Practice - Specify the argument type -</p>
      <button onClick={onClickPractice}>Run practice 1</button>
    </div>
  )
}
