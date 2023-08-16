import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: skyblue;
  border: 4px solid black;
  border-radius: 10px;
  width: 500px;
  gap: 15px;
  text-align: center;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 18px;
  gap: 10px;
  width: 300px;
  padding: 0;
  margin: 0;
`;

export const StyledDeleteBtn = styled.button`
  width: 75px;
  height: 25px;
  background-color: black;
  color: skyblue;
  border: 1px sold white;
  border-radius: 5px;
`;

export const Alert = styled.p`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`;
