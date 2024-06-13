import React from 'react'
import AddBook from '../AddBook'

export default function Home({ commonCss }) {
    return (
        <div className={`${commonCss}`}>
            <AddBook />
        </div>
    )
}
