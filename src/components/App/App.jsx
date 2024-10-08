
import { useDispatch } from 'react-redux'
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineList from '../AirlineList/AirlineList';

function App() {
  const dispatch = useDispatch() 

  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm/>
      <AirlineList/>
    </div>
  );
}

export default App;
