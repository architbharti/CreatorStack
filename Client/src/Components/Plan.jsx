import React from 'react'
import { PricingTable } from '@clerk/react'

const Plan = () => {
  return (
    <div className='relative max-w-5xl mx-auto px-4 sm:px-8 my-28'>

      {/* Decorative accent */}
      <div className='absolute -top-10 left-10 w-24 h-24 rounded-full bg-[#FFA2B6]/40 blur-2xl pointer-events-none' />

      <div className='absolute -bottom-10 right-10 w-28 h-28 rounded-full bg-[#FFB11D]/30 blur-2xl pointer-events-none' />

      {/* Heading */}
      <div className='relative text-center'>

        <p className='text-[#E43D12] text-xs font-semibold tracking-[0.3em] uppercase mb-3'>
          Simple Pricing
        </p>

        <h2 className='text-[#171717] text-4xl sm:text-[42px] font-bold'>
          Choose Your Plan
        </h2>

        <p className='text-[#6B6863] max-w-lg mx-auto mt-3 leading-6'>
          Start for free and scale as you grow. Find the right plan for
          your content creation needs.
        </p>

      </div>


      {/* Clerk Pricing Table */}
      <div className='relative mt-14 max-sm:mx-2'>

        <div className='rounded-2xl'>
          <PricingTable />
        </div>

      </div>


      {/* Bottom note */}
      <div className='flex justify-center mt-8'>
        <div className='flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6B6863]'>

          <span className='w-8 h-px bg-[#E43D12]' />

          Create more. Spend less.

          <span className='w-8 h-px bg-[#E43D12]' />

        </div>
      </div>

    </div>
  )
}

export default Plan
