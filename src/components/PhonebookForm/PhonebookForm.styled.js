import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  border: 3px solid black;
  background-color: skyblue;
  border-radius: 10px;
  gap: 15px;
  padding: 20px;
`;

export const StyledField = styled(Field)`
  display: flex;
  width: 150px;
  height: 25px;
  font-size: 16px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: black;
  border-color: skyblue;
  color: skyblue;
  font-weight: 400;
  font-size: 16px;
  padding: auto;
`;

export const Alert = styled.div`
  position: relative;
  top: 10px;
  left: 80px;
  width: 75px;
  background-color: red;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  display: block;
  width: 220px;
`;
