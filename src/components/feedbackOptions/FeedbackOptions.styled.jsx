import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 20px;
  background-color: blue;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    color: white;
  }
`;
