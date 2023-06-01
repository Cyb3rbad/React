import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <label>LOGIN</label>
          <form>
              <label for="lname">Login</label>
              <input type="text" id="lname"></input>
              <label for="lpassword">Password</label>
              <input type="password" id="lpassword"></input>
          </form>
          <label>REGISTER</label>
          <form>
              <label for="rname">Login</label>
              <input type="text" id="rname"></input>
              <label for="rpassword">Password</label>
              <input type="password" id="rpassword"></input>
          </form>
    </div>
  );
}

export default App;
