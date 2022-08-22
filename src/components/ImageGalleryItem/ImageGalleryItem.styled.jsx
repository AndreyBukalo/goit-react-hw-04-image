import styled from '@emotion/styled';


export const ListItem = styled.li`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 7px 7px 34px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 7px 34px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 7px 34px -5px rgba(0, 0, 0, 0.75);
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  margin-bottom: 20px;
  border: 4px solid RGBA(0, 8, 0, 0.1);
  border-radius: 10px;
  background-color: floralwhite;
  &:hover {
    transform: scale(1.05);
        transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
  
`;
export const Image = styled.img`
  width: 496px;
  height: 300px;
`;