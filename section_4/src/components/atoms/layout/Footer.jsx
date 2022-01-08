import styled from "styled-components"

export const Footer = () => {
  return(
    <SFooter>
      &copy; 2022 section4 Inc.
    </SFooter>
  )
}

const SFooter = styled.footer`
  background-color: brown;
  color: #fff;
  text-align: right;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`
