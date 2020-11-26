import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';

const HatsPage = (props) => {
  console.log(props);
  return(
    <div>HatsPage</div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
        
    </div>
  );
}

export default App;
