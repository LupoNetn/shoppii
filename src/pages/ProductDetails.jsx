import React from "react";
import { Link, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error.message}</div>;
  if (!data) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-sm mb-4 text-gray-500">
        <Link to='/'>Home</Link> / <Link to='/products'>Products</Link> / <span className="text-gray-700 font-medium">{data.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col space-y-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />
          <div className="flex gap-3 overflow-x-auto">
            {data.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${data.title}-${idx}`}
                className="w-24 h-24 object-cover rounded-xl border hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.title}</h1>
            <p className="text-gray-600 mb-4">{data.description}</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-primary">
                ${data.price}
              </span>
              {data.discountPercentage > 0 && (
                <span className="text-sm text-green-600 font-medium">
                  -{data.discountPercentage}% off
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-yellow-500">★</span>
              <span className="font-medium">{data.rating}</span>
              <span className="text-gray-500">/ 5</span>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                Category: {data.category}
              </span>
              <span
                className={`ml-3 inline-block px-3 py-1 rounded-full text-sm ${
                  data.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {data.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <button className="px-6 py-3 bg-primary text-black rounded-xl shadow hover:shadow-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
