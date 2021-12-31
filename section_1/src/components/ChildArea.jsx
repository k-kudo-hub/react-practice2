import React from 'react';

const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div>
        <p>Child Component</p>
      </div>
      ) : null}
    </>
  )
}

export default ChildArea;
