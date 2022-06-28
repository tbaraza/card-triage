import './Search.css';

function SearchComponent(props: { onSearch: (event: any) => void }) {
    return (
        <input className="search-input" type="text" placeholder='Search Patient Name' onChange={(evt) => props.onSearch(evt.target.value)} /> 
    )
}

export default SearchComponent;
