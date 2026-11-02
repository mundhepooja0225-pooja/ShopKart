import React, { useEffect, useState } from 'react'
import Product from '../Components/Product';

const Products = () => {

  const [products, setProducts] = useState([])
  const [sortPrice, setSortPrice] = useState("");
  const [sortRating, setSortRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerpage = 4;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      if (sortPrice === 'lowToHigh') {
        return a.price - b.p
        
      }
      if (sortPrice === 'highToLow') {
        return b.price - a.price;
      }
    }

    if (sortBy === 'rating') {
      if (sortRating === "lowToHigh") {
        return a.rating.rate - b.rating.rate;
      }

      if (sortRating === "highToLow") {
        return b.rating.rate - a.rating.rate;
      }
    }

    return 0;
  })

  const totalPages = Math.ceil(sortedProducts.length / productsPerpage);

  const indexOfLastProduct = currentPage * productsPerpage;

  const indexOfFirstproduct = indexOfLastProduct - productsPerpage;

  const currentproducts = sortedProducts.slice(indexOfFirstproduct, indexOfLastProduct);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  };


  return (
    <div>
      <h3>Products</h3>
      <label>Sort by: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <br/>
      <label>Sort by Price: </label>
      <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
        <option value="">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
      <br/>
      <label>Sort by Rating: </label>
      <select value={sortRating} onChange={(e) => setSortRating(e.target.value)}>
        <option value="">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
      <div>
        {currentproducts.map(prod => (
          <Product
            key={prod.id}
            title={prod.title}
            price={prod.price}
            category={prod.category}
            image={prod.image}
            rating={prod.rating.rate}
          />
        ))}
      </div>
      <div className='pagination'>
        <button onClick={previousPage}
          disabled={currentPage === 1}
        >
          previous
        </button>
        <span>
          page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage}
        disabled={currentPage === totalPages || totalPages === 0}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Products