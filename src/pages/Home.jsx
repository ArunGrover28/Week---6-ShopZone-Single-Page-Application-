import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Amazing Products at 
              <span className="block text-yellow-300">ShopZone</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Your one-stop destination for quality products at unbeatable prices.
              Shop smart. Shop easy.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/shop"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
              alt="shopping"
              className="rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {["Electronics", "Fashion", "Beauty"].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center cursor-pointer"
            >
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="text-gray-500 mt-2">
                Explore top-quality {category.toLowerCase()} products.
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose ShopZone?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-gray-500 mt-2">
                Get your orders delivered quickly and safely.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-lg">Best Prices</h3>
              <p className="text-gray-500 mt-2">
                Competitive pricing on all premium products.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold text-lg">Secure Payment</h3>
              <p className="text-gray-500 mt-2">
                100% secure and reliable payment methods.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Start Shopping?
        </h2>
        <p className="mt-4 text-gray-200">
          Explore our wide collection and grab your favorite items today!
        </p>

        <Link
          to="/shop"
          className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Explore Now
        </Link>
      </section>

    </div>
  );
}
