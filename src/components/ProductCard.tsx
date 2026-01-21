import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-[#1e3a5f] text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-[#1e3a5f] mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#1e3a5f]">
            {product.price}
          </span>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="amazon-btn text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.5 18.5h-1v-4h-4v-1h4v-4h1v4h4v1h-4v4z"/>
            </svg>
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
