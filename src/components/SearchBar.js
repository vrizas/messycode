import React from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from "react-icons/im";

function SearchBar({ search }) {
    const handleSearchThread = ({ target }) => {
        search(target.value);
    }

    return (
        <section className="mb-6 relative">
            <input type="search" placeholder="Search by tag or keyword" className="py-2 pl-10 pr-3 rounded-md shadow-main w-full lg:w-1/2" onChange={handleSearchThread} />
            <ImSearch className="absolute top-1/2 left-[12px] translate-y-[-50%]" />
        </section>
    );
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired,
}

export default SearchBar;
