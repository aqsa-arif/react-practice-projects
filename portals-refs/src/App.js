import { useState , Fragment} from 'react'; 
import AddUser from './components/Users/AddUser';
import ListUsers from './components/Users/ListUsers';

function App() {
  const [userLists, setUserLists] = useState([]);

  const onSelectData = (uName, uAge) => {
      setUserLists((prevLists)  => {
        return [
          ...prevLists,
          { id: Math.random().toString() , 
            name: uName, 
            age:  uAge },
        ]
      })
  }

  return (
    <Fragment>

      <AddUser  onSelectData={onSelectData} />
      { userLists.length && <ListUsers userLists={userLists} /> } 
      
    </Fragment>
  );
}

export default App;
