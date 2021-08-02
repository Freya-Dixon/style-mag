
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import contents from './data/contents';
import styles from "./App.module.scss";

function App() {
  return (
  <>
  <section>
    <NavBar />
    </section>
    <section className={styles.allCards}>
    <Cards content={contents[0]}/>
    <Cards content={contents[1]}/>
    <Cards content={contents[2]}/>
    <Cards content={contents[3]}/>
    <Cards content={contents[4]}/>
    <Cards content={contents[5]}/>
    <Cards content={contents[6]}/>
    <Cards content={contents[7]}/>
    <Cards content={contents[8]}/>
    <Cards content={contents[9]}/>
    <Cards content={contents[10]}/>
    <Cards content={contents[11]}/>
    </section>
  </>
  );
}

export default App;
