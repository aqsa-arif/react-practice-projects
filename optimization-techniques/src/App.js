import './App.css';

import { useCallback, useMemo, useState } from 'react';
import DemoList from './components/DemoList';
import Button from './components/Button';

function App() {
  const [title, setTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setTitle('My New List');
  },[]);

  const list = useMemo(() => {
    const myList=[5,3,6,10,8];
    return myList;
  } , []);

  return (
     <div className='app'>
        <DemoList title={title} list={list} />
        {
          useMemo(() =>   
          <Button changeTitleHandler={changeTitleHandler} /> ,[changeTitleHandler]
          )
        }
      
     </div>
  );
}

export default App;
