import color from 'color';
import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button } from './components/Button';
import { ColorDiv, Container } from './components/divs';

export default function App() {
  const initialColor = randomColor();
  const [generatedColor, setGeneratedColor] = useState(initialColor);
  const isLight = color(generatedColor).isLight();

  return (
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
  );
}
