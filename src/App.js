import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>h1</h1>
        <p>
        React is so cool!
        </p>
        <p>
          Here's another p!
        </p>
        <ul> 
          List
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;