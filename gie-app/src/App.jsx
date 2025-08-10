import logo from './candy.svg'; // โลโก้ใหม่ที่คุณต้องการใช้
import './App.css';
import Hello from './hello';
import goodbye from './Goodbye';
import JSXExamples from './components/JSXExamples';
import Goodbye from './Goodbye';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: '#ffc1cc',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '10px'
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Hello />
          ร้านขายลูกกวาด
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye />
      <JSXExamples />
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
