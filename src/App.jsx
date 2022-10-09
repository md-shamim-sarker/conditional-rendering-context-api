import React, {useState} from 'react';
import Grandfather from './components/Grandfather/Grandfather';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='text-center w-1/2 mx-auto border p-3 mt-10'>
      <h2>App</h2>
      <Grandfather></Grandfather>
    </div>
  );
};

export default App;