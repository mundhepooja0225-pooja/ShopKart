import React from 'react'

const Brands = ({ image, name }) => {
    return (
        <div>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default Brands
