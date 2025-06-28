import React, { useState } from "react";
import { Sofa, Lightbulb, PaintBucket, Home } from "lucide-react";

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products", icon: Home },
    { id: "furniture", label: "Furniture", icon: Sofa },
    { id: "lighting", label: "Lighting", icon: Lightbulb },
    { id: "decor", label: "Decor & Art", icon: PaintBucket },
  ];

  const products = [
    {
      id: 1,
      name: "Modern Sectional Sofa",
      category: "furniture",
      image: "/image 7.png",
      price: "₹85,000",
      description:
        "Comfortable and stylish sectional sofa perfect for modern living rooms.",
    },
    {
      id: 2,
      name: "Modern Kitchen",
      category: "furniture",
      image: "/image 8.png",
      price: "₹1,20,000",
      description:
        "Sleek and functional modern kitchen setup with premium finishes.",
    },
    {
      id: 3,
      name: "Abstract Wall Art",
      category: "decor",
      image: "/image 11.png",
      price: "₹8,500",
      description: "Contemporary abstract artwork to enhance your wall decor.",
    },
    {
      id: 4,
      name: "Lounge TV Art",
      category: "decor",
      image: "/image 3.png",
      price: "₹12,000",
      description:
        "Stylish and contemporary TV art piece to elevate your lounge decor.",
    },
    {
      id: 5,
      name: "Living Room",
      category: "lighting",
      image: "/image 4.png",
      price: "₹18,000",
      description:
        "Modern floor lamp designed to illuminate and enhance your living room.",
    },
    {
      id: 6,
      name: "Illuminated Kitchen Set",
      category: "decor",
      image: "/image 5.png",
      price: "₹4,500",
      description:
        "A perfect blend of lighting and kitchen decor for a modern touch.",
    },
    {
      id: 7,
      name: "Classic Kitchen",
      category: "furniture",
      image: "/image 6.png",
      price: "₹95,000",
      description:
        "Timeless classic kitchen design with premium materials and finishes.",
    },
    {
      id: 8,
      name: "Designer TV Unit",
      category: "furniture",
      image: "/image2.png",
      price: "₹65,000",
      description:
        "Modern designer TV unit with ample storage and sleek design.",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Product Gallery
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our carefully curated collection of premium interior design
            products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Icon size={16} className="sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
