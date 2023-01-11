import React from 'react'
import PropTypes from 'prop-types'
import { ImSearch } from 'react-icons/im'

function SearchBar ({ type, search }) {
  const iconColor = {
    default: '#191919',
    primary: '#3CB043',
    secondary: '#B0F8B6',
    danger: '#DC3545'
  }

  const handleSearchThread = ({ target }) => {
    search(target.value)
  }

  return (
        <section className="mb-6 relative">
            <input type="search" placeholder="Search by tag or keyword" className="py-2 pl-10 pr-3 rounded-md shadow-main w-full lg:w-1/2" onChange={handleSearchThread} />
            <ImSearch className="absolute top-1/2 left-[12px] translate-y-[-50%]" color={iconColor[type]} />
        </section>
  )
}

SearchBar.propTypes = {
  /** Type of announcement, it will change the type of the search input  */
  type: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']).isRequired,
  /** Action when the user is typing */
  search: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
  type: 'default'
}

export default SearchBar
