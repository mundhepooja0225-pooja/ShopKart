import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-copy">
                    <span className="eyebrow">Fresh picks for every day</span>
                    <h1>Shop smarter. Style brighter.</h1>
                    <p>
                        Discover premium essentials, trending accessories, and everyday favorites
                        curated for modern living.
                    </p>

                    <div className="hero-actions">
                        <Link to="/products" className="primary-btn">Shop now</Link>
                        <Link to="/about" className="secondary-btn">Learn more</Link>
                    </div>

                    <div className="trust-row">
                        <div>
                            <strong>10k+</strong>
                            <span>happy shoppers</span>
                        </div>
                        <div>
                            <strong>4.9/5</strong>
                            <span>average rating</span>
                        </div>
                        <div>
                            <strong>24/7</strong>
                            <span>support</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual" aria-label="Featured products">
                    <div className="floating-card card-one">
                        <span>Hot deal</span>
                        <strong>Up to 40% off</strong>
                    </div>

                    <div className="main-showcase">
                        <div className="showcase-badge">New season</div>
                        <h3>Urban Essentials</h3>
                        <p>Minimal designs, maximum comfort.</p>
                    </div>

                    <div className="floating-card card-two">
                        <span>Fast delivery</span>
                        <strong>2-day shipping</strong>
                    </div>
                </div>
            </section>

            <section className="promo-strip">
                <div className="promo-item">
                    <span className="promo-icon">🚚</span>
                    Free shipping over $50
                </div>
                <div className="promo-item">
                    <span className="promo-icon">🎁</span>
                    Gift cards available
                </div>
                <div className="promo-item">
                    <span className="promo-icon">💳</span>
                    Secure checkout
                </div>
            </section>

            <section className="feature-grid">
                <div className="feature-card accent-purple">
                    <span className="feature-label">Trending</span>
                    <h3>Smart lifestyle</h3>
                    <p>Curated picks for work, comfort, and everyday joy.</p>
                </div>
                <div className="feature-card accent-pink">
                    <span className="feature-label">Best sellers</span>
                    <h3>Top picks</h3>
                    <p>Fresh arrivals customers keep coming back for.</p>
                </div>
                <div className="feature-card accent-gold">
                    <span className="feature-label">Weekend deal</span>
                    <h3>Flash savings</h3>
                    <p>Limited-time offers on must-have essentials.</p>
                </div>
            </section>

            <section className="categories-section">
                <div className="section-heading">
                    <span>Shop by category</span>
                    <h2>Popular collections</h2>
                </div>

                <div className="categories-grid">
                    <div className="category-card category-one">
                        <h3>Women</h3>
                        <p>Elegant essentials</p>
                    </div>
                    <div className="category-card category-two">
                        <h3>Men</h3>
                        <p>Everyday confidence</p>
                    </div>
                    <div className="category-card category-three">
                        <h3>Tech</h3>
                        <p>Smart upgrades</p>
                    </div>
                    <div className="category-card category-four">
                        <h3>Home</h3>
                        <p>Cozy upgrades</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
