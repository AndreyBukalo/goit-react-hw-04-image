import styled from "@emotion/styled";

export const Form = styled.form`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width:100%;
  background-color: RGBA(0, 8, 0, 0.68);
  border-bottom: 4px solid RGBA(0, 8, 0, 0.1);
`;

export const Input = styled.input`
  margin-right: 5px;
  border: 1px solid RGBA(255, 255, 0, 0.08);
  border-radius: 4px;
  height: 41px;
  padding-left: 15px;
  color: RGBA(0, 8, 0, 0.68);
  font-size: 20px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  width: 250px;
  &:foucs {
    outline: 3px solid RGBA(255, 255, 0, 0.4);
  }
`;

export const Button = styled.button`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: RGBA(0, 8, 0, 0.68);
  cursor: pointer;
  height: 46px;
  width: 50px;
  &:focus {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    outline: none;
  }
`;