import React from 'react';
import Button from '../Button';
import { Row } from '../../styles';
import Input from '../Input'

function CalcButtons() {
  let [actualNum, setActualNum] = React.useState('0');
  let [savedOpc, setSavedOpc] = React.useState('0');
  let [savedNumber, setSavedNumber] = React.useState('0');

  function handleClick(num) {
    if (actualNum == '0') {
      actualNum = ''
    }
    setActualNum(`${actualNum}${num}`)
  }
  
  let opcArray = ["c", "0", "=", "+", "-", "*", "/"];
  function handleOpc(opc){
    switch(opc){
      case opcArray[0]:
        setActualNum(0)
        setSavedNumber(0)
        setSavedOpc('')
        break;
      case opcArray[3]:
      case opcArray[4]:
      case opcArray[5]:
      case opcArray[6]:
        setSavedOpc(opc)
        setSavedNumber(actualNum)
        setActualNum('')
        break;
      case opcArray[2]:
        if (savedOpc == '') break;
        let numActual = Number(actualNum)
        let numSaved = Number(savedNumber)
        switch(savedOpc){
          case '+':
            setActualNum(Number(numActual + numSaved))
            break;
          case '-':
            setActualNum(numActual - numSaved)
            break;
          case '*':
            setActualNum(numActual * numSaved)
            break;
          case '/':
            setActualNum(numActual / numSaved)
            break;
          default:
            break;
        }
        setSavedNumber(actualNum)
        break;
      default:
        break;
    }

  }

  let rowsArray = [];
  for (let i = 1; i < 5; i++) {
    rowsArray.push(
      <Row>
        <Button label={i < 4 ? 1 + 3 * (i - 1) : opcArray[i]}     onClick={() => i < 4 ? handleClick(1 + 3 * (i - 1)) : handleOpc(opcArray[i])}></Button>
        <Button label={i < 4 ? 2 + 3 * (i - 1) : opcArray[i + 1]} onClick={() => i < 4 ? handleClick(2 + 3 * (i - 1)) : handleOpc(opcArray[i + 1])}></Button>
        <Button label={i < 4 ? 3 + 3 * (i - 1) : opcArray[i + 2]} onClick={() => i < 4 ? handleClick(3 + 3 * (i - 1)) : handleOpc(opcArray[i + 2])}></Button>
        <Button label={opcArray[i-1]}                             onClick={() => handleOpc(opcArray[i-1])}></Button>
      </Row>
    );
  }

  return (
    <>
      <Input value={actualNum}/>
      {rowsArray}
    </>
  );
}

export default CalcButtons;