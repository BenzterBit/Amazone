import React from 'react'

function getStars({rating}) {
    return (
        Array(rating).fill().map((_, i) =>(
            <p>⭐</p>
        ))
    )
}

export default getStars;