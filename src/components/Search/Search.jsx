import "./Search.css";

function Search({setSearch}) {
    function onChange(event) {
        setSearch(event.target.value);
    }

    return (
        <section className="search">
            <form className="search__form">
                <input className="search__form-input" onChange={onChange} id="search" name="search" type="text" placeholder="Процесс"></input>
            </form>
        </section>
    )
}

export default Search;