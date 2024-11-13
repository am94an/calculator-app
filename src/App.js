import React, { useState } from 'react'; 
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      let expression = input.replace('÷', '/').replace('×', '*');

      expression = expression
        .replace(/√/g, 'Math.sqrt')         
        .replace(/sin/g, 'Math.sin')        
        .replace(/cos/g, 'Math.cos')        
        .replace(/tan/g, 'Math.tan')        
        .replace(/log/g, 'Math.log10')      
        .replace(/ln/g, 'Math.log')         
        .replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)'); 

      const evalResult = eval(expression); 
      setInput(evalResult.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <span className="logo">Casio</span>
      <span className="model">fx-82MS</span>
      <span className="svpam">H-A.M.A.N.</span>

      <div className="screen">
        <div className="input">{input || '0'}</div>
      </div>

      <div className="modifiers">
        <button className="shift">Shift</button>
        <button className="alpha">Alpha</button>
        <button className="on" onClick={handleClear}>On</button>
        <button className="mode">Mode</button>
      </div>

      <div className="replay">Replay</div>

      <table className="function-keys">
        <tr>
          <td><button onClick={() => handleButtonClick('1/')}>x<sup>-1</sup></button></td>
          <td><button onClick={() => handleButtonClick('nCr')}>nCr</button></td>
          <td></td>
          <td></td>
          <td><button onClick={() => handleButtonClick('Pol(')}>Pol(</button></td>
          <td><button onClick={() => handleButtonClick('^3')}>x<sup>3</sup></button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButtonClick('^')}>a<sup>b</sup></button></td>
          <td><button onClick={() => handleButtonClick('√(')}>&radic;</button></td>
          <td><button onClick={() => handleButtonClick('^2')}>x<sup>2</sup></button></td>
          <td><button onClick={() => handleButtonClick('^')}>^</button></td>
          <td><button onClick={() => handleButtonClick('log(')}>log</button></td>
          <td><button onClick={() => handleButtonClick('ln(')}>ln</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButtonClick('-')}>(&minus;)</button></td>
          <td><button onClick={() => handleButtonClick('°')}>°</button></td>
          <td><button onClick={() => handleButtonClick('hyp')}>hyp</button></td>
          <td><button onClick={() => handleButtonClick('sin(')}>sin</button></td>
          <td><button onClick={() => handleButtonClick('cos(')}>cos</button></td>
          <td><button onClick={() => handleButtonClick('tan(')}>tan</button></td>
        </tr>
        <tr>
          <td><button>RCL</button></td>
          <td><button>ENG</button></td>
          <td><button onClick={() => handleButtonClick('(')}>(</button></td>
          <td><button onClick={() => handleButtonClick(')')}>)</button></td>
          <td><button onClick={() => handleButtonClick(',')}>,</button></td>
          <td><button>M+</button></td>
        </tr>
      </table>

      <table className="basic-keys">
        <tr>
          <td><button onClick={() => handleButtonClick('7')}>7</button></td>
          <td><button onClick={() => handleButtonClick('8')}>8</button></td>
          <td><button onClick={() => handleButtonClick('9')}>9</button></td>
          <td><button className="pink" onClick={handleDelete}>DEL</button></td>
          <td><button className="pink" onClick={handleClear}>AC</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButtonClick('4')}>4</button></td>
          <td><button onClick={() => handleButtonClick('5')}>5</button></td>
          <td><button onClick={() => handleButtonClick('6')}>6</button></td>
          <td><button onClick={() => handleButtonClick('*')}>×</button></td>
          <td><button onClick={() => handleButtonClick('/')}>÷</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButtonClick('1')}>1</button></td>
          <td><button onClick={() => handleButtonClick('2')}>2</button></td>
          <td><button onClick={() => handleButtonClick('3')}>3</button></td>
          <td><button onClick={() => handleButtonClick('+')}>+</button></td>
          <td><button onClick={() => handleButtonClick('-')}>−</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleButtonClick('0')}>0</button></td>
          <td><button onClick={() => handleButtonClick('.')}>.</button></td>
          <td><button onClick={() => handleButtonClick('e')}>EXP</button></td>
          <td><button onClick={calculateResult}>=</button></td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
