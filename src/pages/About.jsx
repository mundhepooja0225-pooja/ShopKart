import React from 'react'
import Brands from '../Components/Brands'
import Brands from '../data/Brands'
import { Link } from 'react-router-dom'



const About = () => {
    return (
        <div>
            <section className='about'>
                <h2>About US</h2>

                <h4> Making everyday shopping simpler, faster and more enjoyable.</h4>

                <p>At ShopKart, we believe great products should be accessible
                    to everyone. We are an online shopping destination offering
                    a wide range of high-quality products at great prices,
                    delivered right to your doorstep.</p>

                <p>From fashion and electronics to home essentials and more —
                    we're here to make shopping easier, better, and more
                    delightful for you.</p>

                <Link to='/products' className='btn btn-primary'>Shop Now</Link>

                <h5>Shop Smarter, Live Better</h5>
            </section>

            <section className='second-section'>
                <h3>Trusted brands</h3>
                <div className='brands'>
                    {Brands.map(brnd => (
                        <Brands
                            image={brnd.image}
                            name={brnd.name}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About
