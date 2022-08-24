import styled from '@emotion/styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
  background-color: RGBA(0, 8, 0, 0.68);
  border-bottom: 4px solid RGBA(0, 8, 0, 0.1);
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;

  border-bottom: 4px solid RGBA(0, 8, 0, 0.1);
`;

export const Input = styled.input`
  margin-right: 5px;
  border: 1px solid RGBA(255, 255, 0, 0.08);
  border-radius: 4px;
  height: 41px;
  width: 300px;
  padding-left: 15px;
  color: RGBA(0, 8, 0, 0.68);
  font-size: 20px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:foucs {
    outline: 3px solid RGBA(255, 255, 0, 0.4);
  }
`;
export const Icon = styled(BiSearchAlt)`
  width: 32px;
  height: 32px;
  fill: RGBA(0, 8, 0, 0.68);
`;
export const Button = styled.button`
  position: absolute;
  top: 24%;
  left: 85%;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  outline: none;
  background: transparent;

  cursor: pointer;

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
