import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Homestead Supply & More',
  description: 'Learn about Homestead Supply & More - your trusted source for quality home goods, tools, and outdoor supplies.',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            About Homestead Supply & More
          </h1>
          <p className="text-xl text-gray-600">
            Quality products for your home, workshop, and outdoor spaces.
          </p>
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Homestead Supply & More was founded with a simple mission: to provide
              hardworking families with reliable, quality products that make everyday
              life easier. Whether you&apos;re organizing your home, tackling a DIY project,
              or maintaining your outdoor space, we&apos;ve got you covered.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We carefully select each product in our catalog based on quality,
              durability, and value. Our team personally evaluates items to ensure
              they meet our high standards before adding them to our store.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Home Goods</h3>
                <p className="text-gray-600 text-sm">
                  Storage solutions, organization tools, kitchen accessories, and
                  everything you need to keep your home running smoothly.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Tools & Hardware</h3>
                <p className="text-gray-600 text-sm">
                  From power tools to hand tools, we stock the equipment you need
                  for repairs, projects, and professional work.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Outdoor & Garden</h3>
                <p className="text-gray-600 text-sm">
                  Garden tools, outdoor lighting, planters, and supplies to help
                  you create and maintain beautiful outdoor spaces.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Why Shop With Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ff9900] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[#1e3a5f]">Quality Assured</strong>
                  <p className="text-gray-600 text-sm">Every product is carefully selected for quality and value.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ff9900] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[#1e3a5f]">Amazon Fulfillment</strong>
                  <p className="text-gray-600 text-sm">Fast, reliable shipping with Prime-eligible delivery options.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ff9900] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[#1e3a5f]">Easy Returns</strong>
                  <p className="text-gray-600 text-sm">Shop with confidence knowing Amazon&apos;s return policy has you covered.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ff9900] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[#1e3a5f]">Customer Service</strong>
                  <p className="text-gray-600 text-sm">We&apos;re here to help with any questions about our products.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#1e3a5f] text-white rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-200 mb-6">
            Browse our full product catalog and find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="btn-secondary">
              View Products
            </a>
            <a
              href="https://www.amazon.com/s?me=AKDENCFW3A9SI"
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-btn justify-center"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
