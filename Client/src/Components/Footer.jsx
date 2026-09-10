import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 lg:px-24 xl:px-32 pt-14 bg-[#EBE9E1] text-[#6B6863]">

      {/* Main Footer */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-[#171717]/15 pb-10">

        {/* Brand Section */}
        <div className="max-w-md">

          <img
            src={assets.logo}
            alt="CreatorStack"
            className="w-40 h-auto"
          />

          <p className="mt-6 text-sm leading-6 text-[#6B6863]">
            Experience the power of AI with CreatorStack.ai.
            <br />
            Transform your content creation with our suite of premium AI tools.
            <br />
            Write articles, generate images, and enhance your workflow.
          </p>

        </div>


        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">

          {/* Company */}
          <div>

            <h2 className="font-semibold text-[#171717] mb-5">
              Company
            </h2>

            <ul className="text-sm space-y-3">

              <li>
                <a
                  href="#"
                  className="hover:text-[#E43D12] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#E43D12] transition"
                >
                  About us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#E43D12] transition"
                >
                  Contact us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#E43D12] transition"
                >
                  Privacy policy
                </a>
              </li>

            </ul>

          </div>


          {/* Newsletter */}
          <div className="max-w-lg">

            <h2 className="font-semibold text-[#171717] mb-5">
              Subscribe to our newsletter
            </h2>

            <div className="text-sm">

              <p className="leading-6 text-[#6B6863]">
                The latest news, articles, and resources,
                sent to your inbox weekly.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch gap-2 pt-5">

                <input
                  className="border border-[#CFC8BE] bg-[#FFFDFC] placeholder-[#8A857F] focus:border-[#E43D12] focus:ring-1 focus:ring-[#E43D12] outline-none w-full sm:w-64 h-11 rounded px-3 text-sm text-[#171717] transition"
                  type="email"
                  placeholder="Enter your email"
                />

                <button
                  className="bg-[#E43D12] hover:bg-[#D93616] text-white px-6 h-11 rounded cursor-pointer font-medium transition"
                >
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
