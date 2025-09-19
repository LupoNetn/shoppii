import React from 'react';
import { Link } from 'react-router'; 
import useFetch from '../hooks/useFetch';

const ProductsPage = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">Loading products...</div>
    );
  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load products.
      </div>
    );

  const products = data || [];

  // break products into groups of 5 for horizontal sections on mobile
  const groups = [];
  const chunkSize = 5;
  for (let i = 0; i < products.length; i += chunkSize) {
    groups.push(products.slice(i, i + chunkSize));
  }

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Our Products
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover our curated range of high-quality products designed to make
          your life better. Click on any product to see details or add it to your cart.
        </p>

        {/* Mobile view: multiple horizontal scroll sections */}
        <div className="space-y-8 md:hidden">
          {groups.map((group, idx) => (
            <div key={idx} className="overflow-x-auto flex gap-6 pb-4">
              {group.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-72 bg-white rounded-xl shadow hover:shadow-md transition"
                >
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-48 w-full object-cover rounded-t-xl"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-indigo-600 font-bold">${product.price}</span>
                      <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
                    </div>
                    <button
                      className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                      onClick={() => alert(`Added ${product.title} to cart!`)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop view: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition flex flex-col"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 flex-1">
                  {product.description}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">${product.price}</span>
                  <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
                </div>
                <button
                  className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                  onClick={() => alert(`Added ${product.title} to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
