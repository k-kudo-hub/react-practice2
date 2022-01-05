import styled from "styled-components";

const SecondaryButton = (props) => {
  const { children } = props;
  return (
    <SButton>{children}</SButton>
  );
};

const SButton = styled.button`
  background-color: #11999e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export default SecondaryButton;
