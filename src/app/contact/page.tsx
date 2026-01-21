import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Homestead Supply & More',
  description: 'Get in touch with Homestead Supply & More. We\'re here to help with any questions about our products.',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Have a question? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f]">Email</h3>
                  <p className="text-gray-600">support@homesteadsupplyandmore.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24-48 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff9900] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f]">Amazon Store</h3>
                  <p className="text-gray-600">
                    For order-related questions, please contact us through
                    <a
                      href="https://www.amazon.com/sp?seller=AKDENCFW3A9SI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff9900] hover:underline ml-1"
                    >
                      our Amazon seller page
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Order Support</h3>
              <p className="text-gray-600 text-sm">
                For questions about existing orders, shipping, returns, or refunds,
                please contact us directly through Amazon. This ensures the fastest
                response and access to your order details.
              </p>
              <a
                href="https://www.amazon.com/sp?seller=AKDENCFW3A9SI"
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-btn inline-flex mt-4"
              >
                Contact on Amazon
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send Us a Message</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="product">Product Question</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Note: This form is for general inquiries. For order-related questions,
              please contact us through Amazon for the fastest response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
