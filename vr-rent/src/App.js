import Header from './header/Header';
import MainContent from './main-content/MainContent';
import Cards from './main-content/Cards';
import Footer from './footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
