import styled from 'styled-components';
import generatedColor from '../App.js';

export const ColorDiv = styled.div`
  background-color: ${generatedColor};
  width: 300px;
  height: 200px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6em;
`;
