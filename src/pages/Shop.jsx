import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-xl font-semibold">Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-red-500 text-lg">{error}</h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Shop Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          
          <Link key={product.id}
      to={`/product/${product.id}`}>
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">
                {product.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 font-bold">
                  ${product.price}
                </span>

                {/* <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button> */}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
