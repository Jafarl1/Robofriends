import React from 'react'

function Searchbox({ searchChange }) {
    return (
        <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            onInput={searchChange}
        />
    )
}

export default Searchbox;