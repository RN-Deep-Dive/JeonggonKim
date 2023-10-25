import { useState } from 'react';

export const useCalculator = () => {
    const [input, setInput] = useState(0);
    const [currentOperator, setCurrentOperator] =useState(null);
    const [result, setResult] = useState(null);
    const [tempInput, setTempInput] = useState(null);
    const [tempOperator, setTempOperator] = useState(null);
    const [isClickedOperator, setIsClickedOperator] = useState(false);
    const [isClickedEqual, setIsClickedEqual] = useState(false);
    const [hardReset, setHardReset] =useState(false);

    // const hasInput = input ? true : false;
    const hasInput = !!input;
  
    const onPressNum = (num) => {
      if(currentOperator  && isClickedOperator) {
        setResult(input);
        setInput(num);
        setIsClickedOperator(false);
      } else {
        if (isClickedEqual){
          setIsClickedEqual(false);
          setHardReset(true);
          onPressReset();
          setInput(num);
          setIsClickedOperator(false);
        }
        else {
          const newInput = Number(`${input}${num}`); 
          setInput(newInput); 
        }
      }
    }
    
    const onPressOperator = (operator) => {
      if (operator !== "=") {
        setCurrentOperator(operator);
        setIsClickedOperator(true);
        setIsClickedEqual(false);
      } else {
          let finalResult = result;
          const finalInput = isClickedEqual ? tempInput : input;
          const finalOperator = isClickedEqual ? tempOperator:currentOperator;
          switch (finalOperator){
            case '+':
              finalResult = result + finalInput;
              break;
            case '-':
              finalResult = result - finalInput;
              break;
            case '*':
              finalResult = result * finalInput;
              break;
            case '/':
              finalResult = result / finalInput;
              break;
            default:
              break;  
          }
          setResult(finalResult);
          setInput(finalResult);
          setTempInput(finalInput);
          setCurrentOperator(null);
          setTempOperator(finalOperator);
          setIsClickedEqual(true);
        }
    }
  
    const onPressReset = () => {
      if (hasInput) {
        if (hardReset){
          console.log('1')
          setInput(0);
          setCurrentOperator(0);
          setResult(0);
          setTempInput(0);
          setTempOperator(0);
          setHardReset(false);
        }
        else {
          setInput(0);
        }
      } else {
        setInput(0);
        setCurrentOperator(0);
        setResult(0);
        setTempInput(0);
        setTempOperator(0);
      }
    }   

    return {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset,
    }
};