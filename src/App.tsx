import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';

function App() { 

  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <p>React</p>

      </div>
    </div>
  )
}

export default App
