import React from 'react'

function Searchbox({ name, id, placeholder, searchChange }) {
    return (
        <input
            type="search"
            name={name}
            id={id}
            placeholder={placeholder}
            onInput={searchChange}
        />
    )
}

export default Searchbox;