import './App.css';
import { Route, useLocation, Switch } from 'react-router-dom';
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location=useLocation()
  return (
    <div className='App'>
      {location.pathname !=='/' && <NavBar/> }
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/home' component={Home}/>
        <Route path='/create' component={Form}/>
      </Switch>
    
   

    </div>
  );
}

export default App
