import color from 'color';
import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const initialColor = randomColor();
  const [generatedColor, setGeneratedColor] = useState(initialColor);
  const isLight = color(generatedColor).isLight();

  //  const colorCheck = console.log(color.isLight());

  /* variables related to main div
   */

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
    &:hover {
      color: #e0e1dd;
      background-color: #778da9;
      cursor: pointer;
    }
  `;

  return (
    <>
      <Container>
        <ColorDiv>
          <div
            style={{
              fontFamily: 'andale mono',
              fontSize: '1.8em',
              fontWeight: '900',
              padding: '0.3em',
              color: isLight ? '#000000' : '#ffffff',
            }}
          >
            {generatedColor}
          </div>
        </ColorDiv>
        <Button
          onClick={() => {
            const newColor = randomColor();
            setGeneratedColor(newColor);
          }}
        >
          Generate
        </Button>
      </Container>
    </>
  );
}
