import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router >

        <Header />

        <Route exact path='/'>
          {login} 
        </Route>

        <Route exact path='/register'>
          {register}       
        </Route>

        <Route exact path='/home'>
          <Content />          
        </Route>

        <Route path="/">
          <Footer />
        </Route>
      </ Router>
    </div>
  );
}

const register = (
  <div className="login-container">
      <p> REJESTRACJA</p>

      <input type="text" placeholder="eMail"/>

      <input type="text" placeholder="login"/>

      <input type="password" placeholder="Hasło" />
      <input type="password" placeholder="Hasło"/>
      <Link 
            className="button-link"
            role="button"
            to="/home"
            > 
            JUST DO IT!
        </Link>
  </div>
);

const login = (
  <div className="login-container">

  <p> ZALOGUJ SIĘ!</p>

  <input type="text" placeholder="login"/>

  <input type="password" placeholder="hasło" />

  <Link 
      className="button-link"
      role="button"
      to="/home"
      > 
      Login
  </Link>

  <span> NIE MASZ KONTA ?</span>
  <Link
      className="button-link"
      role="button"
      to="/register"
      > 
      REJESTRACJA
  </Link>    

</div>
);


export default App;
