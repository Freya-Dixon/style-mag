
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import HomeView from './containers/HomeView'
import contents from './data/contents';
import styles from "./App.module.scss";

function App() {
  return (
  <>
  <section>
    <NavBar />
    <HomeView />
    </section>
    
  </>
  );
}

export default App;
