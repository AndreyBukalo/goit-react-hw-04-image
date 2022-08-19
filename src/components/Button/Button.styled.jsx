import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: RGBA(0, 8, 0, 0.68);
  cursor: pointer;
  height: 60px;
  width: 180px;
  color: #fff;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
