
import './App.css';
import SearchBar from "./Components/SearchBar";
import {useState} from "react";
import PexelsCard from "./Components/PexelsCard";
import PixabayCard from "./Components/PixabayCard";
import FlatIconCard from "./Components/FlatIconCard";


function App() {
    const [search,setSearch]=useState('')
  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
        <div className='cards-list'>
            {/*{search?<PexelsCard className='cards' search={search} />:""}*/}
            {/*{search?<PixabayCard className='cards' search={search} />:""}*/}
            {search?<FlatIconCard className='cards' search={search} />:""}
        </div>
    </div>
  );
}

export default App;
