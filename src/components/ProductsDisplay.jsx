import React from "react";
import useFetch from "../hooks/useFetch";

// a simple Tailwind spinner component
const Spinner = () => (
  <div className="flex justify-center items-center w-full h-40">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const ProductsDisplay = ({ title }) => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  // choose slice indices based on title
  const [start, end] = title?.toLowerCase() === "top selling" ? [4, 8] : [0, 4];

  // filter only when data available
  const filtered = data
    ? data
        .filter(
          (item) => item.category === "beauty" || item.category === "fragrances"
        )
        .slice(start, end)
    : [];

  return (
    <section className="mt-10 px-4 md:px-8 py-10">
      <h2 className="font-extrabold text-xl md:text-3xl text-center mb-8">
        {title}
      </h2>

      <div
        className="
          flex overflow-x-auto space-x-4 snap-x snap-mandatory 
          md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6
        "
      >
        {loading && !data && (
          <div className="w-full col-span-full">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center w-full col-span-full">
            {error}
          </div>
        )}

        {filtered.length > 0 &&
          filtered.map((item) => (
            <div
              key={item.id}
              className="
                min-w-[80%] sm:min-w-[60%]
                md:min-w-0 md:w-auto md:h-auto
                border bg-blue-50 p-4 flex flex-col items-start snap-center
                shrink-0
              "
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div className="w-full flex justify-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="
                        w-[90%] max-w-[240px] md:max-w-[280px] lg:max-w-[260px] xl:max-w-[220px]
                        max-h-64 object-contain shadow-md
                        transition-transform duration-300 hover:scale-105
                      "
                    />
                  </div>
                  <h3 className="mt-4 text-sm md:text-base font-medium text-left w-full">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm w-full">${item.price}</p>
                </>
              )}
            </div>
          ))}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-12">
        <button
          className="
            px-6 py-3 border border-black bg-transparent 
            text-black text-sm md:text-base 
            hover:bg-black hover:text-white 
            transition-colors duration-300
          "
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default ProductsDisplay;
