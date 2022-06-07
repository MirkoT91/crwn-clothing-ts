import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 60vw;
  flex-direction: row;
  justify-content: center;
  margin: 30px auto;

  @media screen and(max-width:1300px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AlreadyAccount = styled.h2`
  font-size: 16px;
  cursor: pointer;
  margin: 20px auto;
`