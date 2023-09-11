# React Random Color Generator

This app will return a styled div in a random color, displaying the HEX code of the color in the middle.

## Unknowns & things to think about

- What are my cutoff points for colors that are too light to be legible? Does my library have solutions for this?

## version with nested divs that drone won't like:

```
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
```
