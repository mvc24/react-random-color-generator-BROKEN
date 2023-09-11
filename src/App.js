import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const initialColor = randomColor();
  const [generatedColor, setGeneratedColor] = useState(initialColor);

  {
    /* variables related to main div


    */
  }

  const Container = styled.div`
    text-align: center;
    margin: auto;
    margin-top: 3em;
    padding: 0.6em;
  `;

  const ColorDiv = styled.div`
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

  const ColorNameDiv = styled.div`
    font-family: 'andale mono', monospace;
    font-size: 1.8em;
    font-weight: 900;
    padding: 0.3em;
    color: ${generatedColor};
    background-color: #fff;
    border-radius: 3px;
  `;

  {
    /* variables related to button */
  }
  const Button = styled.button`
    font-family: 'andale mono', monospace;
    font-size: 1.2em;
    padding: 0.6em;
    color: #1b263b;
    background-color: white;
    border-radius: 3px;
    border: solid 1px #e0e1dd;
  `;

  return (
    <>
      <Container>
        <ColorDiv>
          <ColorNameDiv>{generatedColor}</ColorNameDiv>
        </ColorDiv>
        <Button>Generate</Button>
      </Container>
    </>
  );
}
