import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";


export default function ProductDetail() {
  const { id } = useParams();
  const {addToCart} = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-xl font-semibold">Loading product...</h2>
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
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-8">

        {/* Product Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-100 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <span className="text-2xl font-bold text-indigo-600 mb-6">
            ${product.price}
          </span>

          <button
            onClick={(e) => {
            e.preventDefault();
            addToCart(product);
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
}
