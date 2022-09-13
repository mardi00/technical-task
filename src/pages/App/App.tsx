import React from 'react';
import './App.css';
import { TextInput } from 'components/TextInput';
import { IntegerInput } from 'components/IntegerInput';
import { FloatInput } from 'components/FloatInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>TextInput</p>
        <TextInput value='default value' placeholder='placeholder' onChange={(value: string)=> console.log(value)}/>

        <p>IntegerInput</p>
        <IntegerInput value={9} placeholder='Enter an integer' onChange={(value: number|null)=> console.log(value)} min={-10} max={100} />

        <p>FloatInput</p>
        <FloatInput value={8} placeholder='Enter a float' onChange={(value: number|null)=> console.log(value)} min={-9} max={100} />
      </header>
    </div>
  );
}

export default App;
