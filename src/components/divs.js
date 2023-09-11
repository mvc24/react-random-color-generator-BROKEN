import styled from 'styled-components';
import generatedColor from '../App.js';

export const Container = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 3em;
  padding: 0.6em;
`;

export const ColorDiv = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6em;
  background-color: ${generatedColor};
`;
