'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import { products, Category, categories } from '@/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const currentCategoryName = categories.find(c => c.id === selectedCategory)?.name || 'All Products';

  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">
          {currentCategoryName}
        </h1>
        <p className="text-gray-600">
          Browse our selection of quality products available on Amazon.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search products..."
          />
        </div>
        <div className="flex-shrink-0">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
      </p>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />

      {/* Amazon CTA */}
      {filteredProducts.length > 0 && (
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
            Looking for more?
          </h2>
          <p className="text-gray-600 mb-4">
            Visit our full Amazon store for our complete product catalog.
          </p>
          <a
            href="https://www.amazon.com/s?me=AKDENCFW3A9SI"
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-btn inline-flex"
          >
            View All on Amazon
          </a>
        </div>
      )}
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-80"></div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingFallback />}>
          <ProductsContent />
        </Suspense>
      </div>
    </div>
  );
}
