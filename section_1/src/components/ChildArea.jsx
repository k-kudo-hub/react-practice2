import React from 'react';
import { memo } from 'react';

/**
 * What is 'memo' ? 
 * You can prevent unnecessary re-rendering of your own when the parent component is re-rendered.
 * 
 * How to use ? 
 * Surround definition with memo().
 */
const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  // Heavy processing ... !!
  const data = [...Array(2000).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("...");
  })

  /**
   *  When will React be re-rendered? 
   *  1. When state is update.
   *  2. When props is update.
   *  3. When parent component is updated.
   */

  return (
    <>
      {open ? (
        <div>
        <p>Child Component</p>
        <button onClick={onClickClose}>Close</button>
      </div>
      ) : null}
    </>
  )
})

export default ChildArea;
