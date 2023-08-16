import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: skyblue;
  border: 4px solid black;
  border-radius: 10px;
`;

export const StyledFilterLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
`;

export const FilterField = styled.input`
  width: 150px;
  height: 20px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
  padding-left: 5px;
  border-radius: 5px;
`;
