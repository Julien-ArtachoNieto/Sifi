import './SearchBar.css'
const SearchBar =({search,setSearch,...props})=>{
    const handleClick=()=>{
        setSearch()
        const input = document.querySelector('.searchBar-input')
        setSearch(input.value)
    }
    return (
    <div className='searchBar'>
        <h1 className='searchBarTitle'>Sifi</h1>
        <input className='searchBar-input'/>
        <button className='searchBar-btn' onClick={handleClick}>Search It</button>
    </div>
)
}
export default SearchBar;