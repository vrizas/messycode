import React from 'react'
import PropTypes from 'prop-types'
import ThreadItem, { threadItemShape } from './ThreadItem'

function ThreadsList ({ threads }) {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
            threads.map((thread) => (
                <ThreadItem key={thread.id} {...thread} />
            ))
        }
    </section>
  )
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired
}

export default ThreadsList
