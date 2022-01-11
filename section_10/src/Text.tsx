import React, { VFC } from 'react';

type Props = {
  color: string;
  fontSize: string;
}
// Type specification for FC(Function Components)
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>This is text.</p>
}
