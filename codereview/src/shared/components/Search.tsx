function SearchComponent(props: { onSearch: (event: any) => void }) {
    return (
        <input type="text" onChange={(evt) => props.onSearch(evt.target.value)} /> 
    )
}

// TO DO: Find out why this component is not functioning properly
export default SearchComponent;
