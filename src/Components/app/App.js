import logo from './logo.svg';
import './App.css';
import Header from '../header/header';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Playlist from '../playlist/playlist';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className='workPlace'>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;