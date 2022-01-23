const SearchBar =({search,setSearch,...props})=>{
    const handleClick=()=>{
        setSearch()
        const input = document.querySelector('.searchBar')
        setSearch(input.value)
    }
    return (
    <div>
        <h1>Sifi</h1>
        <input className='searchBar'/>
        <button className='searchBar-btn' onClick={handleClick}>Search It</button>
    </div>
)
}
export default SearchBar;