
import './App.css';
import SearchBar from "./Components/SearchBar";
import {useState} from "react";
import PexelsCard from "./Components/PexelsCard";


function App() {
    const [search,setSearch]=useState('')
  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
        {search?<PexelsCard className='cards' search={search} />:""}

    </div>
  );
}

export default App;
