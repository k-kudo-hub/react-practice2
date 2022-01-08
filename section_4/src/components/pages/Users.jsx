import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `Bond${val + 1}`,
    image: "https://source.unsplash.com/mJaD10XeD7w",
    email: "aaa@example.com",
    phone: "XXX-XXXX-XXXX",
    company: {
      name: "Test.inc"
    },
    web: "http://localhost.com"
  }
}))

export const Users = () => {
  return (
    <SContainer>
      <h2>Users PAGE</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
